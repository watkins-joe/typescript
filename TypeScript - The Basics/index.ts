/**
 * typescript comes with a built-in compiler command, 'tsc'
 *
 * tsc <nameOfFile>
 *
 * on command line
 *
 * creating a tsconfig.json file can be made to configure the compiler, target JS version (such as es5)
 *
 * most important compilerOptions, typically:
 *
 * "target": string
 * - the version of JS we want to compile to. if we use esnext and then compile our code, we are compiling the code to target the latest version of JS that supports the syntax in the code itself.
 *
 * "watch": boolean
 * - option that lets us set if the TS compiler should recompile our code after every time we save the file. this will save us from running the tsc command after every change
 *
 * "lib": array[library]
 * - allows us to include typing for certain environments such as "dom",
 *
 * // typing your code //
 *
 * two ways this can be done
 *
 * 1. implicitly
 * - assigning a value to the variable when it's declared is implicit typing
 *
 *
 * let lucky = 23
 *
 * this implicitly types 'lucky' as a number, it's type is inferred
 *
 * if we try to reassign lucky to a string, it will give us an error
 *
 * lucky  = '23'
 *
 * Type '"23"' is not assignable to type 'number'.
 *
 *
 * if we don't add any type annotations to our variable AND we don't assign a value to it when declared, it will be inferred as type 'any'.
 *
 * let lucky;
 *
 * meaning we can do what we couldn't do before, assign lucky to either a string or a number.
 *
 * lucky = 23;
 * lucky = '23';
 *
 * 2. explicitly
 * - assigning a type to the variable when it's declared is explicity typing
 *
 * we can assign a type to a variable with a colon:
 *
 * let lucky: number
 *
 * note: if you have an implicit type (let lucky: number = 23), don't bother explicitly typing it
 *
 * it's redundnant.
 *
 * // creating own types from scratch //
 *
 * types are typically written in Pascal case
 *
 * type Style = 'bold' | 'italic';
 *
 * creating a union type is done with a pipe |, and now we can only assign the variable 'font' to one of these two specific values
 *
 * let font: Style;
 */

// more often than not, you will be strong-typing objects with different properties and different types

// const person = {
//     first: 'Jeff',
//     last: 'Delaney'
// }

// const person2 = {
//     first: 'Usain',
//     last: 'Bolt'
// }

// we want to enforce that this object shape has a first and last name with string types

// we can enforce the shape of an object with an INTERFACE

// if we know the shape of the person object will always be the same, we can define an interface that defines the types of each property

interface Person {
  first: string;
  last: string;
}

const person: Person = {
  first: "Jeff",
  last: "Delaney",
};

const person2: Person = {
  first: "Usain",
  last: "Bolt",
};

// FUNCTIONS //

// strong-typing a function can be more complex because you can strong-type the arguments AND the return value

// function pow(x,y) {
//     return Math.pow(x,y)
// }

// arguments can be strongly-typed just like how we did with variables -> by adding a colon and the type you want the argument to be

// function pow(x: number, y: number) {
//     return Math.pow(x, y)
// }

// this function now has an IMPLICIT return type of 'number' because we are using the native Math javascript library.

// we can annotate a specific return value by using a colon after the function argument parenthesis and before the brackets

// function pow(x: number, y: number): string {
//     return Math.pow(x, y).toString();
// }

// in some cases, you may have a function that doesn't return a value or only produces some sort of side-effect.

// in this case, you can type your function return value to be 'void'

function pow(x: number, y: number): void {
  Math.pow(x, y);
}

// ARRAYS //

// const arr: number[] = [];

// arr.push(1)
// arr.push('23')
// arr.push(false)

// we can force the array to only have number types by writing the number type followed by brackets, signifying that it's an array of numbers

// this is very useful especially for when you are working with an array of objects and want to get some intelli-sense as you are iterating over those objects

// TS also opens the door to a new data structure called a 'Tuple'

// these are found in other languages like Python

// Tuple: a fixed-length array where each item in the array has its own type.

type MyList = [number?, string?, boolean?];

const arr: MyList = [];

arr.push(1);
arr.push("23");
arr.push(false);

// can make the items in a tuple, or in many other circumstances optional with a '?'

// GENERICS //

// may run into scenarios where you want to use a type internally inside of a class or a function

// a good example is an rxJs observable, which itself is just a class that has an internal value that you can observe

class Observable<T> {
  constructor(public value: T) {}
}

// the capital 'T' in this code represents a variable Type that we can pass in to strong type this Observable's internal value.

// this allows us to specify the internal type at some later point in our code.

// for example, maybe we might have an observable of a number or maybe an observable of our Person interface. we can also do this implicilty

let x: Observable<number>;

let y: Observable<Person>;

let z = new Observable(23);

// more often than not, you'll be using generics rather than creating them.
