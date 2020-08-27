let apples: number = 5;
let speed: string = "fast";
let hasName: boolean = true;
let nothingMuch: null = null;
let nothing: undefined = undefined;

//built-in object
let now: Date = new Date();

//arrays
let colors: string[] = ["red", "green", "blue"];
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, false, false, true];

//classes
class Car {}

let car: Car = new Car();

//object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// function
const logNumber = (i: number) => {
  console.log(i);
};

const logNumber1: (i: number) => void = (i) => {
  console.log(i);
};

// when to use the annotations
// 1. functions that return the 'any' type

const json = "{x:10, y:20}";
//const coordinates = JSON.parse(json);
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);

// 2. when we declare a variable in one line and intialize it later
let words = ["red", "green", "blue"];
let foundWord: boolean;

for (let i = 0; i <= words.length; i++) {
  if (words[i] === "green") {
    foundWord = true;
  }
}
// 3. variable whose type cannot be inferred correctly

let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = true;
  }
}
