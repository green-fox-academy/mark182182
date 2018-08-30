'use strict';

export function checkAnagram(firstWord: string, secondWord: string): boolean {
  if (firstWord.length === secondWord.length) {
    const specialCharacters: string = '[.]|!|,|;|-|:|_|/';
    firstWord.match(specialCharacters) ? checkForSpecial(firstWord.split(''), specialCharacters) : null;
    ;
    secondWord.match(specialCharacters) ? checkForSpecial(secondWord.split(''), specialCharacters) : null;
    ;

    const sortedFirstWord: string = firstWord.split('').sort().join(''); const sortedSecondWord: string = secondWord.split('').sort().join(''); console.log(sortedFirstWord, sortedSecondWord); if (sortedFirstWord === sortedSecondWord) { return true; };
  } return false;
}

function checkForSpecial(checkArray: string[], specialCharacters: string): string {
  let removeSpecialFromWord: string[][] = [checkArray];

  removeSpecialFromWord.forEach(element => {
    element.forEach((value, index, array) => {
      do {
        console.log(array);
        array.splice(value.indexOf(specialCharacters), 1);
        break;
      }
      while (value.search(specialCharacters) !== -1)
    });
  });
  console.log(removeSpecialFromWord);

  const cleanFirstWord: string = removeSpecialFromWord.join('');
  console.log(cleanFirstWord);
  return cleanFirstWord;
}
const firstWord: string = 'b.!;,.!.';
const secondWord: string = 'b.!;!,..';
console.log(checkAnagram(firstWord, secondWord));