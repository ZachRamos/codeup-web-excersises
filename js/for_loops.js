// var numberEntered = parseInt(prompt("Enter a number between 1 and 10"));
//
// for(var i = 1; i <= 10; i++) {
//     var total = numberEntered * i;
//     console.log(numberEntered + "x" + i + "=" + total);
// }



for (var i = 1; i <= 10; i++ ) {
    var randomNumber = Math.floor(Math.random() * 180) + 20;
    if (randomNumber % 2 !== 0) {
        console.log(randomNumber + " is odd");
    } else {
        console.log(randomNumber + " is even");
    }
}