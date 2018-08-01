var addNumbers = 0;
var firstOpen = true;
while (firstOpen == true) {
    console.log("Please input 5 numbers.");
    for (var x = 0; x < 5; x++) {
        let userInput = prompt("Please type in a number");
        if (userInput != null) {
            addNumbers += parseInt(userInput);
            document.write(userInput);
        }
        if (userInput != null && isNaN(parseInt(userInput))) {
            console.log("Please input numbers only.");
        }
        firstOpen = false;
    }
    console.log("The sum of the numbers is: " + addNumbers + ",")
    console.log("The average is: " + addNumbers / x + ".")
}