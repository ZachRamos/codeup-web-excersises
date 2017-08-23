(function(){
    "use strict";

    /**
     * TODO:
     * Create person object, store it in a variable named person
     */
    /**
     * TODO:
     * Create firstName and lastName properties in your person object, and
     * assign your name to them
     */


    var person = {
        firstName: "Zach",
        lastName: "Ramos",

        sayHello: function () {
            console.log("Hello from " + this.firstName + " " + this.lastName)
            
        }
    };

    console.log(person.sayHello());


    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * person.sayHello() // returns "Hello from Rick Sanchez!"
     */

    /** TODO: Remember this problem from before?
     *
     * HEB has an offer for the shoppers that buy products amounting to more
     * than $200. Write a JS program, using conditionals, that logs to the
     * browser, how much does Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];



    var discount = 0;
    var totalAfterDiscount = shoppers[0].amount;

    if (shoppers[1].amount > 200) {
        discount = .1;
        totalAfterDiscount = shoppers[1].amount - shoppers[1].amount * discount;
    }

    console.log(shoppers[0].name + " has to pay $" + shoppers[0].amount + ", it has a discount of $" + discount + ", the total after discount is $" + totalAfterDiscount);

   // var paid = shoppers.forEach(function (shopper) {
   //     if (!shoppers.hasOwnProperty("name")) {
   //     } else {
   //         shoppers.name;
   //     }
   //
   //     if (shoppers.name = undefined) {
   //          console.log("You are broke.");
   //      } else {
   //          console.log(shoppers.name + " bought " + shoppers.amount + " dollars worth of groceries!")
   //      }
   //
   //  });
   //
   //  console.log(paid)

})();
