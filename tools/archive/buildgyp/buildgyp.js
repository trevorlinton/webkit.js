#!/usr/bin/node

// Dependencies
// npm install execSync
var sh = require('execSync');
var fs = require('fs');

var compiler = "/usr/bin/clang";
var compileropts = [];

var undefined_symbols = 'Undefined symbols for architecture';
var maybe_you_meant = "(maybe you meant: ";
var implict_main_module = "implicit entry/start for main executable";


var utils = {};

utils.exec = function (execpath,args) {
	var command = execpath + " " + ((args instanceof Array) ? args.join(' ') : args);
	return sh.exec(command);
}

/* Run the preprocessor over it. */
utils.preprocess = function (input) {
	var execparam = [];
	execparam.concat(compileropts);
	execparam.push('-P');
	execparam.push(input);
	return utils.exec(compiler,execparam).output;
}

/* Naively compile the file to see its undefined symbols. */
utils.compile = function(file) {
	var execparam = [];
	execparam.concat(compileropts);
	execparam.push(file);
	return utils.exec(compiler,execparam).output;
}

/**
 * Parse out the included headers from a cpp/c file. 
 * Run compiler to spit out included files. */
utils.scan_for_includes = function(file) {

	var execparam = [];
	execparam.concat(compileropts);
	execparam.push('-H');
	execparam.push(file);
	
	var compiledata = utils.exec(compiler,execparam);

	var data = compiledata.split('\n');
	var return_data=[];
	var previous;

	for(var i=0; i < data.length; i++) {
		var line = data[i].trim();
		if(line[0]=='.') {
			return_data.push({depth:line.indexOf(' '),file:line.substring(line.indexOf(' '),line.length)});
		}
	}
	return return_data;
}

/**
 * Interpret the results from a compile. This will log undefined symbols and other compiler errors.
 * this takes the input from @see{utils.compile}.
 */
utils.interpret_compiler_output = function(compiledata) {
	var data = compiledata.split('\n');
	var return_data={};

	for(var i=0; i < data.length; i++) {
		if(data[i].trim().substring(0,undefined_symbols.length) == undefined_symbols)
		{
			var symbol;
			return_data.error = "undefined_symbols";
			return_data.symbols = [];
			for(i++; i < data.length; i++) {
				var line = data[i].trim();
				if(line[0] == '"') {
					symbol = line.substring(1,line.indexOf('"',1));
					return_data.symbols[symbol] = {referenced_from:[],did_you_mean:[],warnings:[]};
				} else if(line[0] == '_') {
					return_data.symbols[symbol].referenced_from.push(line.substring(0,line.indexOf(' ')));
				} else if(line[0] == '(') {
					return_data.symbols[symbol].did_you_mean.push(line.substring(maybe_you_meant.length,line.indexOf(')')))
				} else if(line == implict_main_module) {
					return_data.symbols[symbol].warnings.push("implicit_main_module");
				}
			}
		}
	}
	return return_data;
}

/**
 * Accept as input the output of a command such as:
 * `clang -E -dD file -isysroot /non/existant/this/is/on/purpose`
 */
utils.scan_for_preprocessor_symbols = function(targetfile) {
	var execparam = [];
	execparam.concat(compileropts);
	execparam.push("-E");
	execparam.push("-dD");
	execparam.push(file);
	execparam.push("-isysroot");
	execparam.push("/non/existant/this/is/on/purpose");
	var compiledata = utils.exec(compiler,execparam).output;

	var data = compiledata.split('\n');
	var return_data={defined:[],undef:[]};
	var ignore = false;

	for(var i=0; i < data.length; i++) {
		var line = data[i].trim();
		if(line[0] == '#' && line[1] == ' ') {
			var data = line[0].split(' '); // TODO: Support spaces in header paths!
			var defined_in_file = data[2].substring(1,data[2].length-1);
			if(defined_in_file != targetfile)
				ignore = true;
			else {
				current_file = defined_in_file;
				ignore = false;
			}
		} else if (line.length > 7 && line.substring(0,7) == '#define' && !ignore) {
			var name = line.substring(8,line.indexOf(' ',8));
			var value = line.substring(name.length+1, name.length);
			return_data.defined.push({name:name, value:value});
		} else if (line.length > 6 && line.substring(0,6) == '#undef' && !ignore) {
			var name = line.substring(8,line.indexOf(' ',8));
			var value = line.substring(name.length+1, name.length);
			return_data.undef.push({name:name, value:value});
		}
	}
	return return_data;
}


utils.touch = function(file) { utils.write(file,''); }
utils.isdir = function(path) { return fs.existsSync(d) && fs.statSync(d).isDirectory(); }
utils.exists = function(path) { return fs.existsSync(d) }
utils.ask = function(question,options,existing_value) {

}
utils.print = function(message) {
	if(process.argv.indexOf("--quiet")==-1) {
		console.log(message);
	}
}
utils.write = function(path,data) { fs.writeFileSync(path,data); }
utils.read = function(file) { return require('fs').readFileSync(file); }
utils.find_files = function(project_path,include_files,exclude_files) {
	// MUST RETURN RELATIVE TO BASE
	var command = "find "+project_path+" -name '*' -type fl | grep -E  '"+include_files+"'";
	if(exclude_files && exclude_files!='') command += " | grep -E -v '"+exclude_files+"'";
	return sh.exec(command).stdout;
}
utils.subtract = function(dest,src) {
	var out = [];
	for(var i=0;i < src.length; i++) {
		if(dest.indexOf(src[i])==-1) out.push(src[i]);
	}
	return out;
}
utils.intersect = function(A,B) {
	var out = [];
	for(var i=0; i < A.length; i++)
		if(B.indexOf(A[i])!=-1) out.push(A[i]);
	return out;
}
utils.union = function(A,B) {
	var out = A;
	for(var i=0; i < B.length; i++) {
		if(A.indexOf(B[i])!=-1) out.push(B[i]);
	}
	return out;
}
utils.modified_date = function(a) {
	return Date.parse(fs.statSync(a).ctime);
}

////////////// Symbol Resolution ////////////////


// Constants
var project_data_input_template = {used_symbols:[],defined_symbols:[],implemented_symbols:[],preprocess_symbols:[]};

// Runtime Variables
var project_name = '';
var project_path = '';
var project_data = {
	inputs:[],
	inputs_archived:[],
	source:'',
	include_files:'',
	exclude_files:'',
	include_objc:false,
	include_idl:false,
	project_type:'library',
	symbol_export_files:[],
	derived_data:'',
	preprocess_symbols:[],
	required_headers:[],
	last_full_run:null
};

function check_for_invalid_arguments() {
	return true;
}

function check_project_data() {
	if(!utils.exists(project_data.source) ||
		!utils.isdir(project_data.source) ||
		!utils.isregex(project_data.exclude_files) ||
		!utils.isbool(project_data.include_objc) ||
		!utils.isbool(project_data.include_idl) ||
		!utils.isin(project_data.project_type, ['library','executable']) ||
		!utils.isfile(project_data.symbol_export_file) || 
		!utils.isdir(project_data.derived_data))
		throw new Error("Project data wasn't valid.");
}

function save_project_data() {
	utils.write(project_path, JSON.stringify(project_data));
}

// Get a list of all the files we'll be scanning.
function refresh_input_files() {
	var files_found = utils.find_files(project_path,project_data.include_files,project_data.exclude_files).split('\n');
	var files_already_there = project_data.inputs;
	var files_added = utils.subtract(files_found,files_already_there);
	var files_updated = files_already_there.filter(function(e) {
			if(project_data.last_full_run==null) return true;
			if(project_data.last_full_run < utils.modified_date(e)) return true;
			return false;
		}.bind(this));

	var reexamine = utils.union(files_added,files_updated);

	if(process.argv.indexOf("--dont-resolve-preproc")==-1) {
		for(var i=0; i < reexamine.length; i++)
			refresh_preprocessor_settings(reexamine[i]);
	}
			
	var files_removed = utils.subtract(files_already_there,files_found);
	
	project_data.inputs = utils.intersect(files_already_there,files_found);
	project_data.inputs.concat(files_added);
	project_data.inputs_archived.concat(files_removed);

	utils.print("Added "+files_added.length+" to project.");
	utils.print("Archived (removed) "+files_removed.length+" from project.");
}

function refresh_preprocessor_symbols(target_file) {
	/* Get a list of all preprocessor symbols defined in this file. */
	project_data.preprocess_symbols[target_file] = utils.scan_for_preprocessor_symbols(file);
	// Get a list of all header files included.
	project_Data.required_headers[target_file] = utils.scan_for_includes(file);
}
function refresh_used_symbols() {
	// Get a list of all the symbols that are USED.  This is what the file
	// ACTUALLY needs.
}
function refresh_defined_symbols() {
	// Get a list of all of the DEFINED symbols that are not IMPLEMENTED anywhere.
	// This is what the file THINKS it needs.
}
function refresh_implemented_symbols() {
	// Get a list of all of the IMPLEMENTED symbols that are in this file. 
	// This is what hte file can PROVIDE to others.
}
function refresh_target_exports() {
	// Get a list of the export symbols that we need, 
	// If its a library, get a list of export symbols from a file. 
	// If its a main, just use _main, also scan files for "extern" ? 
}
function build_gyp_files() {
	
}
function build_visual_studio_files() {
	
}
function build_xcode_files() {
	
}
function build_ninja_files() {
	
}
function try_and_compile() {

}


function rebuild() {
	/*if(process.argv.indexOf("--dont-refresh-files")==-1) refresh_input_files();
	if(process.argv.indexOf("--dont-resolve-preproc")==-1) refresh_preprocessor_settings();
	if(process.argv.indexOf("--dont-scan-used-symbols")==-1) refresh_used_symbols();
	if(process.argv.indexOf("--dont-scan-defined-symbols")==-1) refresh_defined_symbols();
	if(process.argv.indexOf("--dont-scan-impl-symbols")==-1) refresh_implemented_symbols();
	if(process.argv.indexOf("--dont-scan-requested-exports")==-1) refresh_target_exports();
	if(process.argv.indexOf("--dont-try-and-compile")==-1) try_and_compile()*/
}

function get_project_data() {
	if(process.argv.indexOf("--no-interactivity")==-1) {
		project_data.source = utils.ask("Project source folder",{type:'dir',blank:'not-allowed'},project_data.source);
		project_data.include_files = utils.ask("Project file inclusions (default: *.cpp,*.h,*.c,*.idl)",{type:'regex',default:'*.cpp,*.h,*.c,*.idl'},project_data.include_files);
		project_data.exclude_files = utils.ask("Project file exclusions",{type:'regex'},project_data.exclude_files);
		project_data.include_objc = utils.ask("Should we ever compile objective-c",['Y','n'],project_data.include_objc);
		project_data.include_idl = utils.ask("Should we ever compile idl files",['Y','n'],project_data.include_idl);
		project_data.project_type = utils.ask("Is this a library or executable",['Library','executable'],project_data.project_type);
		project_data.symbol_export_files = utils.ask("If you have a file of symbols to export, provide the path(s)",{type:'dir',blank:'allowed',multiple:true},project_data.symbol_export_file);
		project_data.derived_data = utils.ask("Where should we save derived data",{type:'dir',blank:'not-allowed'});
		utils.print("For advanced settings modify the project file.");

		check_project_data();
		save_project_data();
	} else {
		check_project_data();
		utils.print("Settings pulled from "+project_data.project_path);
	}
}

function begin_project(name) {
	utils.print("Starting Project: "+name);

	if(name.indexOf(".json")==-1) {
		project_name = name;
		project_path = name + ".json";
	} else {
		project_name = name.replace(".json","");
		project_path = name;
	}
	if(!utils.exists(name) && !utils.exists(name + ".json")) {
		utils.print("Creating new project: "+project_name);
		utils.touch(project_path);
	} else {
		project_data = JSON.parse(utils.read(project_path));
	}

	get_project_data();
	rebuild();

	if(process.argv.indexOf("--build-msvs")!=-1 ||
		process.argv.indexOf("--build-xcode")!=-1 ||
		process.argv.indexOf("--build-ninja")!=-1)
		build_gyp_files();
	if(process.argv.indexOf("--build-msvs")!=-1)
		build_visual_studio_files();
	if(process.argv.indexOf("--build-xcode")!=-1)
		build_xcode_files();
	if(process.argv.indexOf("--build-ninja")!=-1)
		build_ninja_files();
}



/////////// UNIT TESTS ////////////

function unit_tests() {

		var n = utils.compile('tests/main.cpp');
		console.assert(n.code==0, 'Test compile failed: '+JSON.stringify(n));
	
		var p = utils.compile('tests/png.c');
		console.assert(p.code==1, 'Test compile succeeded (it should have failed): '+JSON.stringify(p));

	console.log("Simple compile passed.");

		var d = utils.interpret_compiler_output(p.stdout);
		console.assert(d.error == 'undefined_symbols');
		console.assert(typeof(d.symbols["_crc32"]) == 'object');
	    console.assert(d.symbols["_crc32"].referenced_from[0] == '_png_reset_crc');
	    console.assert(d.symbols["_crc32"].referenced_from[1] == '_png_calculate_crc');

	  	console.assert(typeof(d.symbols["_inflateReset"]) == 'object');
	    console.assert(d.symbols["_inflateReset"].referenced_from[0] == '_png_reset_zstream');

	  	console.assert(typeof(d.symbols["_main"]) == 'object');
	    console.assert(d.symbols["_main"].warnings[0] == "implicit_main_module");

	  	console.assert(typeof(d.symbols["_png_create_struct"]) == 'object');
	    console.assert(d.symbols["_png_create_struct"].referenced_from[0] == '_png_info_init_3');

	  	console.assert(typeof(d.symbols["_png_create_struct_2"]) == 'object');
	    console.assert(d.symbols["_png_create_struct_2"].referenced_from[0] == '_png_create_info_struct');

	  	console.assert(typeof(d.symbols["_png_destroy_struct"]) == 'object');
	    console.assert(d.symbols["_png_destroy_struct"].referenced_from[0] == '_png_info_init_3');

	  	console.assert(typeof(d.symbols["_png_destroy_struct_2"]) == 'object');
	    console.assert(d.symbols["_png_destroy_struct_2"].referenced_from[0] == '_png_destroy_info_struct');

	  	console.assert(typeof(d.symbols["_png_error"]) == 'object');
	    console.assert(d.symbols["_png_error"].referenced_from[0] == '_png_set_sig_bytes');
	    console.assert(d.symbols["_png_error"].referenced_from[1] == '_png_check_IHDR');

	  	console.assert(typeof(d.symbols["_png_free"]) == 'object');
	    console.assert(d.symbols["_png_free"].referenced_from[0] == '_png_zfree');
	    console.assert(d.symbols["_png_free"].referenced_from[1] == '_png_info_destroy');
	  	console.assert(d.symbols["_png_free"].referenced_from[2] == '_png_free_data');
	    console.assert(d.symbols["_png_free"].did_you_mean[0] == '_png_free_data')

	  	console.assert(typeof(d.symbols["_png_malloc"]) == 'object');
	    console.assert(d.symbols["_png_malloc"].referenced_from[0] == '_png_zalloc');
	    console.assert(d.symbols["_png_malloc"].referenced_from[1] == '_png_convert_to_rfc1123');

	    console.assert(d.symbols["_png_warning"].referenced_from[0] == '_png_zalloc');
	    console.assert(d.symbols["_png_warning"].referenced_from[1] == '_png_data_freer');
	    console.assert(d.symbols["_png_warning"].referenced_from[2] == '_png_check_cHRM_fixed');
	    console.assert(d.symbols["_png_warning"].referenced_from[3] == '_png_check_IHDR');

	console.log("Interpreter passed.");

		var p = utils.find_files("tests",".cpp|.h","");
		p = p.split('\n');
		console.assert(p[0] == 'tests/main.cpp', p[0]);
		console.assert(p[1] == 'tests/png.h', p[1]);
		console.assert(p[2] == 'tests/pngconf.h', p[2]);

	console.log("Find files passed.");	
	
}

function dev_tests() {
	project_name = 'webkitjs';
	project_path = '/Tint/webkit.js/tools/buildgyp/test.json';
	project_data.source='/Tint/webkit.js';
	project_data.include_files='\.cpp$|\.h$|\.c$';
	project_data.exclude_files='WebKit2|JavaScriptCore|CF.cpp|.mm|CA.cpp|Tools|tools';
	project_data.derived_data='/Tint/webkit.js/tools/buildgyp/';

	refresh_input_files();
	save_project_data();
	/*
	var p = utils.find_files('/Tint/webkit.js/','\.cpp$|\.h$|\.c$','WebKit2|JavaScriptCore|CF.cpp|.mm|CA.cpp|Tools|tools');
	console.log(p);*/
}

////////// SETUP ENVIRONMENT ////////////
var valid = check_for_invalid_arguments();

if(process.argv.indexOf("--unit-tests") != -1 && valid) {
	unit_tests();
} else if(process.argv.indexOf("--dev-tests") != -1 && valid) {
	dev_tests();
} else if(process.argv.indexOf("--project") != -1 && valid) {
	var index = process.argv.indexOf("--project") + 1;
	begin_project(process.argv[index]);
} else {
	console.log("Build Helper");
	console.log("usage: ./buildhelper [options] --project name");
	console.log("Build helper is a script that scans a C or C++ folder and auto generates");
	console.log("project files and compiler settings.  It's meant to primarily be interactive assitant.");
	console.log("(C) 2014 True Interactions, BSD-License");
	console.log("");
	console.log("Tests");
	console.log(" --unit-tests\t\t\tPerform unit tests to ensure its working OK.");
	console.log("Build Settings");
	console.log(" --project [name]\t\tThe name of the project to start/continue (no spaces).");
	console.log(" --build-msvs\t\t\tBuild Visual Studio files once everything seems good.");
	console.log(" --build-xcode\t\t\tBuild Xcode files once everything seems good.");
	console.log(" --build-ninja\t\t\tBuild ninja files once everything seems good.");
	console.log(" --dont-refresh-files\t\tDo not scan for added/removed files.");
	console.log(" --dont-resolve-preproc\t\tDo not try and resolve preprocessor symbols.");
	console.log(" --dont-scan-used-symbols\tDo not scan for used symbols.");
	console.log(" --dont-scan-defined-symbols\tDo not scan for defined symbols.");
	console.log(" --dont-scan-impl-symbols\tDo not scan for implemented symbols.");
	console.log(" --dont-scan-requested-exports\tDo not scan for requested exports.");
	console.log(" --dont-try-and-compile\t\tDo not attempt to compile and derive settings.");
	console.log("Preferences");
	console.log(" --no-interactivity\t\tIf enabled, do not prompt the user, just error out.");
	console.log(" --quiet\t\t\tDon't be verbose, only print errors or necessary information.");
}

