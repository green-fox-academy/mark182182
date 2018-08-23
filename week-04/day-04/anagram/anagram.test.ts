'use strict';

import { checkAnagram } from './anagram';

const test = require('tape');

test('This checks if two strings are anagramms', t => {
  const firstWord: string = 'a_';
  const secondWord: string = 'a_';
  t.equal(checkAnagram(firstWord, secondWord), true, 'Should be equal');
  t.end();
});
