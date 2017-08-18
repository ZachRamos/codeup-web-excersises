(function(){

    // TODO: Create an array of 4 people's names using literal array notation, in a variable called 'names'.

    // TODO: Create a log statement that will log the number of elements in the names array.

    // TODO: Create log statements that will print each of the names array elements individually.

    var names = ["bob", "bill", "ben", "frank"];

    for(var i = 0; i <= names.length; i++) {
        console.log(names[i])
    }

    names.forEach(function (element, index, array){


        console.log(element);
    });







})();


//var numbers = [1, 2, 3, 4, 5];

// for(var i = 0; i <= numbers.length; i++) {
//     numbers[i] = numbers[i] + 2;
// }

// numbers.forEach(function (element, index, array){
//     numbers[i] = numbers[i] + 2;
// });
//
// console.log(numbers);