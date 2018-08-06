'using strict';
export { };

// -  Create a function called `factorio`
//    that returns it's input's factorial
// The formula is n! = n * (n - k)


function factorio(inputFactor: number) {
    let calcedFactor = 1;
    for (let factorPattern = 0; factorPattern < (inputFactor - 1); factorPattern++) {
        calcedFactor *= inputFactor - factorPattern;
    }
    return calcedFactor;
}

console.log("The factorial is:", factorio(8));