
var counter = 2;
var limit = 65536

while(counter <= limit) {
    console.log(counter);
    counter *= 2;
}


var allCones = Math.floor(Math.random() * 50) + 50;
var conesLeft = allCones

do {

var cones = Math.floor(Math.random() * 5) + 1;

    if(cones > conesLeft){
       console.log("cannot sell you" + cones + "i only have " + conesLeft);
    } else {
        conesLeft = conesLeft - cones;
        console.log(cones + " cones sold")
    }


}while(conesLeft > 0);
console.log("Yay! I sold the all!");
