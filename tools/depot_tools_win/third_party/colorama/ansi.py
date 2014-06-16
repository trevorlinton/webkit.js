'''
This module generates ANSI character codes to printing colors to terminals.
See: http://en.wikipedia.org/wiki/ANSI_escape_code
'''

CSI = '\033['

def code_to_chars(code):
    return CSI + str(code) + 'm'

class AnsiCodes(object):
    def __init__(self):
        for name in dir(self):
            if not name.startswith('_') and name.upper() == name:
                value = getattr(self, name)
                setattr(self, name, code_to_chars(value))


class AnsiFore(AnsiCodes):
    BLACK   = 30
    RED     = 31
    GREEN   = 32
    YELLOW  = 33
    BLUE    = 34
    MAGENTA = 35
    CYAN    = 36
    WHITE   = 37
    RESET   = 39

class AnsiBack(AnsiCodes):
    BLACK   = 40
    RED     = 41
    GREEN   = 42
    YELLOW  = 43
    BLUE    = 44
    MAGENTA = 45
    CYAN    = 46
    WHITE   = 47
    RESET   = 49

class AnsiStyle(AnsiCodes):
    BRIGHT    = 1
    DIM       = 2
    NORMAL    = 22
    RESET_ALL = 0


# Constructing the object converts the code into the equivalent ANSI escape
# string.
Fore = AnsiFore()
Back = AnsiBack()
Style = AnsiStyle()
