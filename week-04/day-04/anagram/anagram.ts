'use strict';

export function checkAnagram(firstWord: string, secondWord: string): boolean {
  if (firstWord.length === secondWord.length) {
    if (firstWord.match('[.]|!|,|;|-|:|_|')) {

    }
    else if (secondWord.match('[.]|!|,|;|-|:|_|')) {

    }

    const sortedFirstWord: string = firstWord.split('').sort().join('');
    const sortedSecondWord: string = secondWord.split('').sort().join('');
    if (sortedFirstWord === sortedSecondWord) {
      return true;
    };
  }
  return false;
}