"use strict";
let stringArr = ["one", "two", "three", "four"];
let guitars = ["Strat", "Les Paul", 5150]; // same as below
let mixedData = ["EVH", 1984, true]; // this called union types it contains() parenthesis
stringArr[0] = "john";
stringArr.push("hey");
guitars[0] = "John";
guitars.unshift(1234);
guitars = stringArr;
// stringArr = guitars // different union types
mixedData = guitars;
// guitars = mixedData; // different union types
let test = [];
let bands = []; // it only hold string data in the array;
bands.push("Van helsing");
// agr meko ek array me ek specific position chaiye and usi position me ek fixed data type chaiye toh hume tuple ki jrurat hogi
let myTuple = ["hi", 23, true];
// and if me union type jo same hai is tuple ke usko is = rkh du toh koi dikkat ni but me reverse ni kr skta =
let mixed = ["john", 21, false];
mixed = myTuple;
// myTuple = mixed // not  assignable bec mixed might have more few component
// myTuple[3] = 22  // and hum isme koi 4th element add ni kr skte  bec wo undefiend bhi hota hai and koi alg data type ni daal skte same position mei.
// Objects
let myObj; //simple way to assign object in typescript
myObj = []; // but note that its not the correct way to assign object bec in js and typescript both have the same data type of array is obj thats why
console.log(typeof myObj);
// correct way is below
const exampleObject = {
    name: "John",
    age: 23,
    isMarried: false,
};
exampleObject["isMarried"] = false; // can't assign different data types
;
let evh = {
    // agr hume koi property ko htana hai toh ? ye lga do type wale me
    name: "Ishwar",
    active: 23,
    album: ["Strat", "Les Paul", 5150],
};
let jp = {
    name: "kunal",
    active: 24,
    album: ["I", "II", "IV"],
};
// evh = jp; // they must have same type to be equal unless you got a error
// also you can't add extra properties in variables  without adding in types below is example of it
// evh.years = 23
const greetGuitarist = (guitarists) => {
    if (guitarists.name) { // ye method thik hai agr tum ? ye ni lga skte ho toh
        return `Hello ${guitarists.name.toUpperCase()}!`;
    }
    return 'Hello';
    // return `Hello ${guitarists.name.toUpperCase()}!`;  // bina ? ye lgaye kroge toh uspe tum koi method ni lga skte ho bec ye maybe undefined ho skta hai
};
console.log(greetGuitarist(jp));
//Enum
//" Unlike most Typescript features, Enums are not a type-level addition to Js but something added to the language and runtime"
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
console.log(Grade.U);
