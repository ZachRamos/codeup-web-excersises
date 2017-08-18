"use strict";

/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 *  > sayHello("codeup") // returns "Hello, codeup!"
 */

(function () {

    function sayHello(name) {
        return "Hello, " + name + "!";

    }


   sayHello("zach");



    var helloMessage = sayHello("zach");

    console.log(helloMessage);

    var myName = "zach";
    sayHello(myName);










/**
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 * console.log 'helloMessage' to check your work
 * Now store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */

// Don't modify the following line, it generates a random number between 1 and
// 100 and stores it in a variable named random
var random = Math.floor((Math.random() * 100) + 1);

function isOdd(number){
    return number +

}






/**
 * TODO:
 * Create a function called 'isOdd' that takes a number as a parameter.
 * The function should use the ternary operator to return a message.
 * The message should contain the number being checked, and whether or not the
 * number is odd
 *
 * Example
 *  > isOdd(42) // returns "42 is not odd!"
 *
 * Call the function 'isOdd' passing the variable 'random' as a parameter.
 * console.log *outside of the function* to check your work
 */

/**
 * TODO: Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant
 *
 * the function should accept a tip percentage and the total of the bill, and
 * return the amount to tip
 *
 * Example
 *  > calculateTip(0.20, 20) // returns 4
 */

function calculateTip (tipPercentage, billTotal) {
    var tip = (tipPercentage/100) * billTotal;
    return tip;
}

console.log(calculateTip(18, 20));


function askForCheck(){
    var total = prompt("Give me the total");
    var percentage = prompt("Give me the tip %");
    var tip = calculateTip(percentage, total);
    console.log("your tip is: " + tip);
}



// var bill = prompt("What is the bill total?");
// var realTip = prompt("how much do you want to tip?");
//
// alert("You should tip $ " + 100/realTip);

/**
 * TODO: use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */
})();
