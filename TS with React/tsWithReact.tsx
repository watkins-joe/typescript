// assuming you have an App with state, with a data const.

/*
...
const [data] = useState({});

return (
    <>
    {data.looks.good.to.me}
    ...
)

*/

// in this example, we are trying to access a deeply nested property on 'data'.

// in JS, it would looks like valid code and would throw no IDE error, but when the app runs, it throws an error that it cannot read the property. bugs like this get shipped to production all of the time

// IF we try to do the same thing in TypeScript, it will tell us about the invalid property type before the app even runs! (Property 'bad' does not exist on type '{}'.)

// this, however, doesn't replace test-driven development.

// type system

// pros
// we can assign a functional component a type of FC, meaning functional component. That tells the compiler the shape of the code, which will throw an error for ANYTHING that is not a valid prop, and will autocomplete everything else. By default, the only known React prop is children.

/*
const Cool:FC = (props) => {
    return <>{props.children}</>
}
*/

// We can define the shape of our own props using a typescript interface. an interface allows you to define or describe the shape of an object by matching a property name to a type.

/*
interface CoolProps {
    foo: number;
    bar: string;
}

with that syntax in its current form, the interface will make these properties required on the object.

they can be made optional by adding a question mark after the property name.

interface CoolProps {
    foo?: number;
    bar?: string;
}
*/

// allows us to use strict types. means that we cannot morph a variable from a string type to number type. forces us to wrtie cleaner, less error prone code

// the contrast in JS is that JS is dynamically/loosely typed, meaning that variables that are a number can be redefined to be a string and vice versa. typescript eliminates this possibility and requires you to specify the data type for each variable you create.

// typescript requires a compiler, often used with NPM and Node.js.
