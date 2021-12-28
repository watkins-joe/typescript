// TypeScript advantages

// TS detects 15 percent of common bugs at the compilation stage.

// TS variables stay the same way as initially defined. For example, if a variable is deteced as a string, it will always be a string. This increases the likelihood of functions working the way they initially intended/were written.

// TS has greater and easier readability because of the strict types. It's easier to see the design intent of the developers who originally wrote the code. This is especially important for distributed teams workin gon the same project.

// TS spots many mistakes automatically, even some things that are common to miss. A good example is function renaming. It's common to not rename functions in every spot, but TS will alert you where this is an issue.

// Every device, platform, or browser that is capable of running JS can run TS -- after the compiler translates it into vanilla JS. Usually, IDEs and editors that support TS come with a built-in TS compiler.

// enable static typing -- allowing you to annotate your code with types

// explicit type example:

// you specify the data type for the variable directly.

// let appName: string;

// appName = 32;
// Error: Type 'number' is not assignable to type 'string'

// implicit type example:

// typescript assumes the data type without defining the type.

// let appName = 'promax'

// appName = 2;
// Error: Type 'number' is not assignable to type 'string'

// you can opt out of the explicit typing by using the any keyword

// let appName: any = 'promax'

// appName = 23;

// throws no error, as appName is allowed any data type

// using explicit typing with new array

let list: number[] = [1, 2, 3];

// let list2: string[] = ['one', 2, 'three'] // Error

let list3: any[] = [1, "two", false];

// can define your own interfaces with custom variables and the types of their properties

// this is especially useful with objects

interface Car {
  year: number;
  model: string;
  electric: boolean;
}

let myCar: Car;

myCar.electric;
myCar.model;
myCar.year;

// intellisense helps us automatically with the autocompletion of property names -- this is an advantage of strongly-typed code

// we don't have to refer to documentation or comb through stack traces to find out where our code didn't work.

// typescripts the basics --

// tooling is a big benefit, compiler can catch bugs in advance

// superset of JS, any JS code valid in TS.

// you can also create your own type aliases:

// type Style = string;

// can also specify that it can only be one of two things

// type Style = "bold" | "italic";

// let font: Style;

// font = "something"; // throws error

// can enforce shape of an object with an interface

interface Person {
  first: string;
  last: string;
  [key: string]: any;
}

const person: Person = {
  first: "Jeff",
  last: "Delany",
};

const person2: Person = {
  first: "Jeff",
  last: "Delany",
  fast: true,
};

// function pow(x: number, y: number) {
//   return Math.pow(x, y);
// }

// pow("23", "foo");

// can annotate function arguments with the data type and a colon after the argument. this will ensure that only those data types are allowed as arguments and greatly helps prevent bugs

// can specific a certain return value data type after the parenthesis, and before the function brackets

function pow(x: number, y: number): string {
  return Math.pow(x, y).toString();
}

// in many cases, you may have functions that dont return a value, or create some kind of side effect.

// in that case, you can type your function return value to void.

function multiply(x, y): void {
  x * y;
}

// can force an array to only have number types

const arr: number[] = [];

// arr.push(1);
// arr.push("23"); // Error
// arr.push(false); // Error

// useful for when you are working with an array of objects and you want to get some intellisense as you're iterating over those objects

// for example, if we retrieved an array of people from our database, we could use our person intercace to know the exact shape of those objects as they are retrieved

// TypeScript also introduces a new data structure called a tuple

// they are a fixed length array where each item in the array can have its own type

type MyList = [number?, string?, boolean?];

// can make any item in the list optional with ?

// TypeScript Generics

class Observable<T> {
  constructor(public value: T) {}
}

let x: Observable<number>;

let y: Observable<Person>;

let z = new Observable(23);

// write this in wednesday's course summary
