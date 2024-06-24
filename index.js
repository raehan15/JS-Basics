console.log("Variables");

let myName = "Raehan";
console.log(myName);
console.log(
  "The scope of let keyword is limited to the block in which it is decalred"
);

var ourName = "nuSoft";
console.log(ourName);
console.log("The scope of the var keyword is throughout the entire program");

const value = 8;
console.log(value);
console.log(
  "The value of const keywords cannot be changed after it is declared unlike the let and var keywords"
);

console.log(
  "How can you escape literal quotes in strings, please write a string below using literal quotes within the string:"
);
console.log(
  "I can use a backlash before each quotation mark, I can use single quotes instead of double quotes to declare a string or I can use the backtick character in the beginning and end of the string"
);
console.log(
  `My name is "Raehan" and I am currently interning in "nuSoft Private Limited"`
);

let MyName = "Raehan";
console.log(
  `I am going to use a variable, "MyName" inside a string : My name is ${MyName} and i am currently interning in "Nusoft Private Limited"`
);

const person = {
  age: 21,
  name: "Josh",
  walk() {},
  talk() {},
};

console.log(person.name);
console.log(person.age);

const person1 = {
  age: 22,
  name: "Jake",
  walk() {
    console.log(this);
  },
  talk() {},
};

person1.walk();

const square = function (value) {
  return value * value;
};

console.log(square(5));

console.log("Convert the function above into an arrow function");

const square_arrow = (value) => value * value;

console.log(square_arrow(5));

console.log("Done!");

console.log(
  `The arrow functions make sure that the "this" keyword inherits the context in which it was defined which is why they are used widely`
);

// Mapping
const colors = ["red", "blue", "green"];
const items = colors.map((color) => `<li>${color}</li`);
console.log(colors);
console.log(items);

// Destructuring
const address = {
  street: "60",
  sector: "I/8-3",
  city: "Islamabad",
  country: "Pakistan",
};

// const street = address.street;
// const sector = address.sector;
// const city = address.city;
// const country = address.country;

const { street, sector, city, country } = address;
console.log(`I am from ${country} and my city is ${city}`);

// const street1 = address.street;
// const sector1 = address.sector;
// const city1 = address.city;
// const country1 = address.country;

const {
  street: street1,
  sector: sector1,
  city: city1,
  country: country1,
} = address;
console.log(`I am from ${country1} and my city is ${city1}`);

// Spreading
const first = [11, 2, 31];
const second = [14, 5, 61];

// Resting
function sum_up(...toAdd) {
  console.log(toAdd);
  let result = 0;
  for (let i = 0; i < toAdd.length; i++) {
    result += toAdd[i];
  }
  return result;
}
console.log(`The sum of the given array is ${sum_up(10, 40, 34)}`);

// const combined = first. concat (second)

const combined = [...first, 7, "first", ...second, 10, "second"];
console.log(combined);

// Classes
class Person {
  constructor(name, age, height) {
    this.name = name;
    this.age = age;
    this.height = height;
  }
  walk() {
    console.log(`${this.name} is walking!`);
  }
}

const person5 = new Person("Josh", 20, "6'2");
person5.walk();

class Teacher extends Person {
  constructor(name, degree) {
    super(name);
    this.degree = degree;
  }
  teach() {
    console.log(
      `Professor ${this.name} graduated with a ${this.degree} and is now teaching!`
    );
  }
}

const teacher = new Teacher("Albert", "PHD");
teacher.teach();
