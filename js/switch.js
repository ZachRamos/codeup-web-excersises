"use strict";

// Don't change the next two lines!
// This creates two variables:
//     one with the colors of the rainbow, and another with a single randome
//     another with a single random color value
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var color = colors[Math.floor(Math.random()*colors.length)];

switch (color) {
    // TODO: create a case statement that will handle every color except indigo and violet
    // TODO: when a color is encountered log a message that tells the color, and an object of that color
    //       example: Blue is the color of the sky.

    // TODO: create a default case that will catch indigo and violet
    // TODO: for the default case, log: I do not know anything by that color.
    case "red":
        console.log("red like fire");
        break;
    case "orange":
        console.log("orange like a pumpkin");
        break;
    case "yellow":
        console.log("yellow like a banana");
        break;
    case "green":
        console.log("green like grass");
        break;
    case "blue":
        console.log("blue like the ocean");
        break;
    default:
        console.log("I do not know anything by that color");
        break;
}


var ryanAmount = (250);
var cameronAmount = (180);
var georgeAmount = (320);
var discountCameron;
var discountRyan;
var discountGeorge;
var minSale = 200;

if (cameronAmount > minSale) {
    discountCameron = .9 * cameronAmount;
} else {
    discountCameron = cameronAmount;
}

if (ryanAmount > minSale) {
    discountRyan = .9 * ryanAmount;
} else {
    discountRyan = ryanAmount;
}

if (georgeAmount > minSale) {
    discountGeorge = .9 * georgeAmount;
} else {
    discountGeorge = georgeAmount;
}










var flipACoin = Math.floor(Math.random()* 2)

if (flipACoin === 0) {
    console.log("Buy a car")
}else if (flipACoin === 1) {
    console.log("Buy a house")
}



var luckyNumber = Math.floor(Math.random()* 6)
var pay = 60
var total;

switch (luckyNumber) {
    case "1":
        total = .9 * pay;
        break;
    case "2":
        total = pay * .75;
        break;
    case "4":
        total = pay * .5;
        break;
    case "5":
        total = 0;
        break;
    default:
        total = pay;
        break;
}

console.log("your total pay is " + total);




var maybe =confirm("Do you want to enter a number?");

if(maybe === true) {
    var probablyANumber = prompt("Enter a number");
    if(isNaN(probablyANumber)){
        alert("That was not a number");
    } else {
        if(probablyANumber % 2 === 0){
            alert("Your number is even");
        } else {
            alert("Your number is odd");
        }
        alert(probablyANumber + 100);
        if(probablyANumber > 0) {

        }
    }
}