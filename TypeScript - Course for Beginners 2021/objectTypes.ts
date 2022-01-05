// Object Types

// objects, key-value pairs

let howOld = {
    age: 30
}

const person = {
    name: 'Maximilian',
    age: 30,
}

// remember to use tsc objectTypes.ts in order to compile TS to JS

console.log(person.age) // prints 30 to console
console.log(person) // prints person object to console

console.log(person.nickname) // Property 'nickname' does not exist on type '{ name: string; age: number; }'.ts(2339)

// throws error because

/**
 * const person: {
    name: string;
    age: number;
}
 */

// the object type of person does not have a property of 'nickname' on it's object type. what's above is an object type, NOT a JSON object.

// the key difference is that in a JSON object, we have COMMAS after the key-VALUE pairs. in object type, we have SEMI-COLONS after the key-TYPE pairs.

/**
 * // THIS IS JSON //
 * const person = {
    name: 'Maximilian',
    age: 30,
}
 */

/**
// THIS IS OBJECT TYPE //
 * const person: {
    name: string;
    age: number;
}
 */

// the obejct type describes the object being used somewhere

// can use object typing in the person2 const with object notation.

// but, our person object types are already implicitly defined based on our inputs WITHOUT having to tell TS what the types are. this is unnecessary for our case. avoid EXPLICITLY typing properties/variables whenever possible.

// here we are EXPLICITLY typing our person2 object.

const person2: {
    name: string;
    age: number;
} = {
    name: 'Joe',
    age: 24
}

// finished with object types

