# execSync

Executes shell commands synchronously.

__WARNING__ For dev machine shell scripting only. **DO NOT USE** for
production servers.

## Install

__Windows__ requires Python and Visual Studio 2012 (Express) installed for
node to build. See [node-gyp installation](https://github.com/TooTallNate/node-gyp#installation)

    npm install execSync

## Usage

Require it

    var sh = require('execSync');

`Run` does not capture output.

    var code = sh.run('echo $USER; echo some_err 1>&2; exit 1');
    console.log('return code ' + code);

Use the less efficient `exec` if you need output. `exec` is just redirection
trickery around `run`.

    var result = sh.exec('echo $USER; echo some_err 1>&2; exit 1');
    console.log('return code ' + result.code);
    console.log('stdout + stderr ' + result.stdout);

## Notes

In *nix and OSX version commands are run via `sh -c YOUR_COMMAND`

In __Windows__ commands are run via `cmd /C YOUR_COMMAND`

## License

Copyright (c) 2012, 2013 Mario Gutierrez mario@mgutz.com

See the file LICENSE for copying permission.
