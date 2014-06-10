/* -*- mode: c++; tab-width: 4; indent-tabs-mode: nil; -*-
* Copyright (c) 2011 Marcus Geelnard
*
* This file is part of CrunchMe.
*
* CrunchMe is free software: you can redistribute it and/or modify
* it under the terms of the GNU General Public License as published by
* the Free Software Foundation, either version 3 of the License, or
* (at your option) any later version.
*
* CrunchMe is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
* GNU General Public License for more details.
*
* You should have received a copy of the GNU General Public License
* along with CrunchMe.  If not, see <http://www.gnu.org/licenses/>.
*/

#include <iostream>
#include <fstream>
#include <sstream>

using namespace std;

static const char head[] = "\xfe\xff\0v\0a\0r\0 \0i\0,\0x\0=\0[\0\x0a";
static const char tail[] = "\0[\0'\0A\0'\0,\0006\0005\0]\0\x0a\0]\0;\0\x0a\0f\0o\0r\0(\0i\0=\0000\0;\0i\0<\0x\0.\0l\0e\0n\0g\0t\0h\0;\0+\0+\0i\0)\0{\0i\0f\0(\0x\0[\0i\0]\0[\0000\0]\0.\0c\0h\0a\0r\0C\0o\0d\0e\0A\0t\0(\0000\0)\0!\0=\0x\0[\0i\0]\0[\0001\0]\0)\0a\0l\0e\0r\0t\0(\0x\0[\0i\0]\0[\0001\0]\0)\0;\0}\0a\0l\0e\0r\0t\0(\0'\0D\0O\0N\0E\0'\0)\0;\0\x0a";

static const int forbiddenLUT[] = {
    0x2028,
    0x2029,
    0xffff
};

bool isForbidden(int c)
{
    // Standard cases
    if ((c < 32) || (c >= 127 && c < 160) || (c == 39) || (c == 92) ||
        (c == 173) || (c >= 0xd800 && c <= 0xdfff) || (c == 0xfffe) ||
        (c == 0xffff) || (c >= 0xfdd0 && c <= 0xfdef))
        return true;

    // LUT cases
    for (unsigned int i = 0; i < sizeof(forbiddenLUT) / sizeof(int); ++i)
    {
        if (c == forbiddenLUT[i])
            return true;
    }

    return false;
}

int main(int argc, char **argv)
{
    int lineNr = -1;

    if (argc >= 2)
    {
        stringstream l;
        l.str(argv[1]);
        l >> lineNr;
        cout << "Looking for line number " << lineNr << endl;
    }

    ofstream f("utf16test.js", ios_base::out | ios_base::binary);
    if (f.fail())
    {
        cerr << "Unable to open output file." << endl;
        return 0;
    }

    // Write header
    f.write(head, sizeof(head) - 1);

    // Write all the characters
    char buf[30];
    int currentLine = 2;
    for (int i = 0; i < 65536; ++i)
    {
        if (!isForbidden(i))
        {
            if (lineNr == currentLine)
            {
                cout << "The Unicode at line " << lineNr << " is " << i;
                cout.setf(ios::hex, ios::basefield);
                cout << " (0x" << i << ")" << endl;
                cout.setf(ios::dec, ios::basefield);
            }

            stringstream s;
            s << "['x'," << i << "],\x0a";
            string str = s.str();
            for (unsigned int j = 0; j < str.length(); ++j)
            {
                buf[j*2] = 0;
                buf[j*2+1] = str[j];
            }
            buf[4] = i >> 8;
            buf[5] = i & 255;
            f.write(buf, 2 * str.length());

            ++currentLine;
        }
    }
    cout << "Wrote " << (currentLine-2) << " characters." << endl;

    // Write the tail
    f.write(tail, sizeof(tail) - 1);
    f.close();

    return 0;
}
