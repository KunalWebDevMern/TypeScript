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
let bands: string[] = []; // it only hold string data in the array;
bands.push("Van helsing");

// agr meko ek array me ek specific position chaiye and usi position me ek fixed data type chaiye toh hume tuple ki jrurat hogi

let myTuple: [string, number, boolean] = ["hi", 23, true];
// and if me union type jo same hai is tuple ke usko is = rkh du toh koi dikkat ni but me reverse ni kr skta =
let mixed = ["john", 21, false];

mixed = myTuple;
// myTuple = mixed // not  assignable bec mixed might have more few component

// myTuple[3] = 22  // and hum isme koi 4th element add ni kr skte  bec wo undefiend bhi hota hai and koi alg data type ni daal skte same position mei.

// Objects

let myObj: object; //simple way to assign object in typescript
myObj = []; // but note that its not the correct way to assign object bec in js and typescript both have the same data type of array is obj thats why
console.log(typeof myObj);

// correct way is below

const exampleObject = {
  name: "John",
  age: 23,
  isMarried: false,
};
exampleObject["isMarried"] = false; // can't assign different data types

// types for obj to assign properties

interface Guitarist{   // you can also use interface or type in this for interface remove = 
  name?: string;  // if you make name optional then it cause problems
  active: number;
  album: (string | number)[]; // union type array
};

let evh: Guitarist = {
  // agr hume koi property ko htana hai toh ? ye lga do type wale me
  name: "Ishwar",
  active: 23,
  album: ["Strat", "Les Paul", 5150],
};
let jp: Guitarist = {
  name: "kunal",
  active: 24,
  album: ["I", "II", "IV"],
};

// evh = jp; // they must have same type to be equal unless you got a error

// also you can't add extra properties in variables  without adding in types below is example of it
// evh.years = 23

const greetGuitarist = (guitarists: Guitarist) => {
  if(guitarists.name){            // ye method thik hai agr tum ? ye ni lga skte ho toh
    return `Hello ${guitarists.name.toUpperCase()}!`
  }
  return 'Hello'
 // return `Hello ${guitarists.name.toUpperCase()}!`;  // bina ? ye lgaye kroge toh uspe tum koi method ni lga skte ho bec ye maybe undefined ho skta hai
};

console.log(greetGuitarist(jp));

//Enum
//" Unlike most Typescript features, Enums are not a type-level addition to Js but something added to the language and runtime"

enum Grade{      // ye enumerated values hai jo start 0 sei hota hai and baki usko followup krte hain like 0,1,2,3,4
  U = 1, // idhr hum agr ek ko bhi set krdein 1 ya 2 toh same hoga jaisa upper likha hai 
  D,
  C,
  B,
  A,
}

console.log(Grade.U);
