#include <cairo.h>
#include <cairo-script-interpreter.h>

#include <stdio.h>
#include <stdlib.h>

static cairo_surface_t *
_surface_create (void *closure,
		 cairo_content_t content,
		 double width, double height,
		 long uid)
{
    return cairo_image_surface_create (CAIRO_FORMAT_ARGB32, width, height);
}

int
main (int argc, char **argv)
{
    const cairo_script_interpreter_hooks_t hooks = {
	.surface_create = _surface_create
    };
    cairo_script_interpreter_t *csi;
    int i;

    for (i = 1; i < argc; i++) {
	int status, line;

	csi = cairo_script_interpreter_create ();
	cairo_script_interpreter_install_hooks (csi, &hooks);
	cairo_script_interpreter_run (csi, argv[i]);
	line = cairo_script_interpreter_get_line_number (csi);
	status = cairo_script_interpreter_destroy (csi);
	if (status) {
	    fprintf (stderr, "Error during replay of '%s', line %d: %d\n",
		     argv[i], line, status);
	    return 1;
	}
    }

    return 0;
}
