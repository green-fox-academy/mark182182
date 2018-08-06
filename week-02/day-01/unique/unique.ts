'using strict';
export { };

//  Create a function that takes a list of numbers as a parameter
//  Returns a list of numbers where every number in the list occurs only once
function unique(listOfNumbers: Array<number>): number[] {
    for (let numberOfElements = 0; numberOfElements < listOfNumbers.length; numberOfElements++) {
        listOfNumbers.some(listOfNumbers => listOfNumbers == ){
            if (currentNumber == listOfNumbers[numberOfElements]) {
            }
            console.log(currentNumber);
        }
        return listOfNumbers;
    }

    //  Example
    console.log(unique([1, 11, 34, 11, 52, 61, 1, 34]))
//  should print: `[1, 11, 34, 52, 61]`