# Copyright 2012 Google Inc. All Rights Reserved.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

"""
Iterator wrapper that allows you to check whether the wrapped iterator
is empty and whether it has more than 1 element.
"""

class PluralityCheckableIterator(object):

  def __init__(self, it):
    self.it = it.__iter__()
    self.head = []
    # Populate first 2 elems into head so we can check whether iterator has
    # more than 1 item.
    for i in range(0, 2):
      self.__populate_head__()

  def __populate_head__(self):
    try:
      e = self.it.next()
      self.underlying_iter_empty = False
      self.head.append(e)
    except StopIteration:
      # Indicates we can no longer call next() on underlying iterator, but
      # there could still be elements left to iterate in head.
      self.underlying_iter_empty = True

  def __iter__(self):
    while len(self.head) > 0:
      yield self.next()
    else:
      raise StopIteration()

  def next(self):
    # Backfill into head each time we pop an element so we can always check
    # for emptiness and for has_plurality().
    self.__populate_head__()
    return self.head.pop(0)

  def is_empty(self):
    return len(self.head) == 0

  def has_plurality(self):
    return len(self.head) > 1
