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


var ryanAmount = (250)
var cameronAmount = (180)
var georgeAmount = (320)

if (ryanAmount >= 200) {
    console.log("Ryan had " + ryanAmount + "and paid",ryanAmount * .9 )
}else if (cameronAmount >= 200) {
    console.log("Cameron had" + cameronAmount + "and paid", cameronAmount)
}else if (georgeAmount >= 200) {
    console.log("George had" + georgeAmount + "and paid",georgeAmount * .9)
}

var flipACoin = Math.floor(Math.random()* 2)

if (flipACoin === 0) {
    console.log("Buy a car")
}else if (flipACoin === 1) {
    console.log("Buy a house")
}



var luckyNumber = Math.floor(Math.random()* 6)
var pay = 60

switch (luckyNumber) {
    case "1":
        console.log(pay * .9);
        break;
    case "2":
        console.log(pay * .75);
        break;
    case "4":
        console.log(pay * .5);
        break;
    case "5":
        console.log(0);
        break;
    default:
        console.log(pay);
        break;
}