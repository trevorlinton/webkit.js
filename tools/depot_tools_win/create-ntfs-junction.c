// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
//
// This is a simple utility for creating NTFS junction points on XP and later
// versions of Windows.

#define _WIN32_WINNT 0x0500

#include <stdio.h>
#include <windows.h>

// This struct definition is absent from the system header files,
// but is described here:
//   http://msdn.microsoft.com/en-us/library/ff552012.aspx
typedef struct _REPARSE_DATA_BUFFER {
  ULONG  ReparseTag;
  USHORT  ReparseDataLength;
  USHORT  Reserved;
  union {
    struct {
      USHORT SubstituteNameOffset;
      USHORT SubstituteNameLength;
      USHORT PrintNameOffset;
      USHORT PrintNameLength;
      ULONG Flags;
      WCHAR PathBuffer[1];
    } SymbolicLinkReparseBuffer;
    struct {
      USHORT SubstituteNameOffset;
      USHORT SubstituteNameLength;
      USHORT PrintNameOffset;
      USHORT PrintNameLength;
      WCHAR PathBuffer[1];
    } MountPointReparseBuffer;
    struct {
      UCHAR DataBuffer[1];
    } GenericReparseBuffer;
  };
} REPARSE_DATA_BUFFER;

int main (int argc, char *argv[])
{
  char buf[MAX_PATH*sizeof(WCHAR) + sizeof(REPARSE_DATA_BUFFER)]={'\0'};
  char* dest_path=NULL;
  char* src_path=NULL;
  char* src_link=NULL;
  char* src_vol=NULL;
  char* dest_vol=NULL;
  HANDLE dir=NULL;
  REPARSE_DATA_BUFFER* reparse = (REPARSE_DATA_BUFFER*) buf;
  int path_len=0, data_len=0;
  DWORD ioctl_return = 0xdeadbeef;

  // To allow this to be used as a drop-in replacement for the posix ln command,
  // allow (and ignore) extra flags.
  if (argc != 3 && (argc !=4 || *argv[1] != '-')) {
    fputs("Usage: create-ntfs-junction <destination dir> <source dir>\n", stderr);
    return -1;
  }

  src_path = argv[argc-2];
  path_len = strlen(src_path);
  if (src_path[path_len-1] == '\\')
    src_path[path_len-1] = '\0';

  dest_path = argv[argc-1];
  path_len = strlen(dest_path);
  if (dest_path[path_len-1] == '\\')
    dest_path[path_len-1] = '\0';

  if (GetFileAttributes(src_path) == INVALID_FILE_ATTRIBUTES) {
    fprintf(stderr, "%s: No such animal.\n", src_path);
    return -1;
  }

  if (!GetVolumePathName(src_path, buf, MAX_PATH)) {
    fprintf(stderr, "Couldn't get volume name for '%s'.\n", src_path);
    return -1;
  }
  src_vol = _strdup(buf);

  if (!GetVolumePathName(dest_path, buf, MAX_PATH)) {
    fprintf(stderr, "Couldn't get volume name for '%s'.\n", dest_path);
    return -1;
  }
  dest_vol = _strdup(buf);

  if (strcmp(src_vol, dest_vol)) {
    fprintf(stderr, "Cannot create junction point across volume boundary.\n");
    fprintf(stderr, "  (from volume '%s' to volume '%s')\n", src_vol, dest_vol);
    return -1;
  }

  // End of input sanity checks; file system modifications may now occur.

  if (GetFileAttributes(dest_path) == INVALID_FILE_ATTRIBUTES) {
    if (!CreateDirectory(dest_path, NULL)) {
      switch(GetLastError()) {
        case ERROR_ALREADY_EXISTS:
          fprintf(stderr, "Can't create directory %s because it already exists "
                  "(this should never happen).\n", dest_path);
          return -1;
          break;
        case ERROR_PATH_NOT_FOUND:
          fprintf(stderr, "Can't create directory %s because some part of the "
                  "intermediate path doesn't exist.", dest_path);
          return -1;
          break;
        default:
          fprintf(stderr, "Unknown error occurred while trying to create "
                  "directory %s.", dest_path);
          return -1;
          break;
      }
    }
  }

  dir = CreateFile(dest_path,
                   GENERIC_WRITE,
                   0,
                   NULL,
                   OPEN_EXISTING,
                   FILE_FLAG_OPEN_REPARSE_POINT | FILE_FLAG_BACKUP_SEMANTICS,
                   NULL);

  strcpy_s(buf, 5, "\\??\\");
  GetFullPathName(src_path, MAX_PATH, buf+4, NULL);
  src_link = _strdup(buf);

  memset(buf, 0, sizeof(buf));
  path_len = MultiByteToWideChar(CP_ACP,
                                 0,
                                 src_link,
                                 -1,
                                 reparse->MountPointReparseBuffer.PathBuffer,
                                 MAX_PATH*sizeof(WCHAR));

  reparse->ReparseTag = IO_REPARSE_TAG_MOUNT_POINT;
  reparse->ReparseDataLength = (path_len+2)*sizeof(WCHAR) + 6;
  reparse->MountPointReparseBuffer.SubstituteNameLength =
      (path_len-1) * sizeof(WCHAR);
  reparse->MountPointReparseBuffer.PrintNameOffset =
      path_len * sizeof(WCHAR);
  data_len = reparse->ReparseDataLength + 8;

  if (!DeviceIoControl(dir,
                       FSCTL_SET_REPARSE_POINT,
                       &buf,
                       data_len,
                       NULL,
                       0,
                       &ioctl_return,
                       NULL)) {
    fprintf(stderr, "Junction point creation failed (ioctl_return=0x%x) (%d)\n",
            ioctl_return, GetLastError());
    return 1;
  }

  return 0;
}
