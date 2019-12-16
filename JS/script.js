var vacationType = prompt("What kind of vacation would you like to go on, musical, tropical, or adventurous?");
var groupSize = prompt("How many people are going with you?");
var place;
var temp;
var clothes;
var method;


if (vacationType === "musical") {
    place = "New Orleans";
    temp = 70;
    clothes = "pants and a t-shirt";
} else if (vacationType === "tropical") {
    place = "Mexico";
    temp = 74;
    clothes = "shorts and a t-shirt";
} else {
    place = "the Grand Canyon";
    temp = 65;
    clothes = "pants and a long sleeve t-shirt";
};

if (groupSize <= 2) {
   method = "first class jet";
} else if (groupSize > 2 && groupSize <= 5) {
    method = "helicopter";
} else {
    method = "charter flight";
};

var result = "With " + groupSize + " people it would be best to take a " + method + " to go to " + place + ". It will most likely be " + temp + " degrees outside so wearing " + clothes + " would be most comfortable.";

console.log(result);