let cat = new Object();
cat.name = "Fluffy";
cat.breed = "Bombay Cat";
cat.age = 3;
cat.meow = function() {
    console.log(`${this.name} says 'Meow!'.`);
};

console.log(cat);
cat.meow();

let cat2 = {
    name: "Fluffy",
    breed: "Bombay Cat",
    age: 3,
    meow: function() {
        console.log(`${this.name} says 'Meow!'.`);
    }
};

console.log(cat2);
cat2.meow();

cat2.color = "black";


let owner = {
    name: "Jane Doe",
    city: "Chicago"
};

cat.owner = owner;

console.log(cat);
console.log(`${cat.name} is owned by ${cat.owner.name}.`);

// associative array syntax
console.log(cat['breed']);

console.log(typeof(cat.unknown));

delete cat.age;
console.log(cat.age); // undefined

// comparing objects
let cup = {
    color: "blue",
    vol: 12
};

let cup2 = {
    color: "blue",
    vol: 12
};

console.log(cup == cup2); // false
console.log(cup.color === cup2.color); // true

let cup3 = cup2;

console.log(cup3 == cup2); // true

cup2.color = "red";
console.log(cup3.color); // red
console.log(cup.color); // blue

let x = 2;
let y = x;
x = 4;
console.log(y); // still 2

// JSON CONVERTING
let json = '{"name":"Fritz", "breed":"Tabby", "age":3, "colors":["white","grey","black"], "owner": {"name":"Jane Doe"}}';
let cat4 = JSON.parse(json);
console.log(cat4);

let catsJSON = '[{"name":"Fluffy", "breed":"Bombay Cat", "age":3}, {"name":"Fritz", "breed":"Tabby", "age":3}]';
let catlist = JSON.parse(catsJSON);
console.log(catlist);

let catJSON = JSON.stringify(cat);
console.log(catJSON);

// Property Handling
// Undefined objects
const person = {
    name: "Alex",
    age: 25,
    contact: {
        email: "alex@example.com"
    }
};

// property doesn't exist - TypeError
// console.log(person.socialMedia.twitter);

// Handling undefined properties
// if statement handling
if (person.socialMedia) {
    console.log(person.socialMedia.twitter);
}

// short-circuiting with && operator
console.log(person.socialMedia && person.socialMedia.twitter);

// ternary operator
console.log(person.socialMedia ? person.socialMedia.twitter : "Not twitter account");

// OPTIONAL CHAINING - prevents runtime errors when accessing deeply nested properties
// It can be less verbose, more compact, and more readable
console.log(person.socialMedia?.twitter);

// array of objects - optional chaining. Code after ? is the optional property
const users = [
 { name: "John", profile: { website: "johnsblog.com" } },
 { name: "Emma" },
 { name: "Mike", profile: { website: "mikesite.net" } }
];

users.forEach(user => {
    console.log(user.profile?.website || "No website available");
});

// OBJECT SHORTHAND syntax - modern way to create objects from variables in scope within our code.
const fname = "Mark";
const lname = "Galloway";
const status = "retired";
const wrestler = {
    fname,
    lname,
    status,
    };

console.log(JSON.stringify(wrestler, null, 2));

// arrow function
let sum = (x,y) => x + y;
let greeting = name => console.log("Hello", name);
greeting("judy");


// OBJECT DESTRUCTURING
const me = {
    name: "CodeFinity",
    age: 22,
    mileTime: "3:55",
    maxBench: 500,
    isLying: true,
};

// Copying values to keys - original object untouched
const nameMe = me.name; const ageMe = me.age; const mileTimeMe = me.mileTime;
// above same as
const { name, age, mileTime } = me;


// We can rename our destructured properties
const { name: handle, age: yearsOnEarth } = me;
console.log(handle, yearsOnEarth);

// Nothing 'bad' happened in the original object
me;


// nested objects
const me2 = {
    name: "CodeFinity",
    address: {
        street: "123 Main St.",
        city: "Any Town",
        state: "IL",
        country: "USA",
    },
};

// Destructure 'address' and then destructure again!
const {
    address: { street, state },
} = me2;

console.log(street, state);
// Nothing 'bad' happened in the original object
me2;



/*   Conclusion
Object destructuring in JavaScript offers a powerful and concise way to extract values
from objects into individual variables. By using destructuring, you can streamline your
code and avoid the repetitive need to reference object properties repeatedly. The syntax
simplifies variable assignment and makes your code more readable and maintainable.

It's important to note that destructuring creates new variables with copies of the values
from the object, which is straightforward when dealing with primitives. However, for
objects or arrays within the original object, destructuring copies the references, so
changes to these nested objects could affect the original object.

Destructuring also supports renaming variables and handling nested objects, which
adds flexibility but may introduce some complexity. For most practical purposes,
focusing on basic destructuring will suffice, while advanced features like renaming and
nesting can be leveraged as needed.
*/


// Object Assign

const {
    name: email
    } = me;

const you = {
    name: "your name",
    myOwnKey: "hi",
};

const someoneElse = {
    name: "Unknown",
    age: 500,
};

Object.assign(me, you, someoneElse);

console.log("me", me);
console.log("you", you);
console.log("someoneElse", someoneElse);

const newObject = Object.assign({}, me, you, someoneElse);

console.log("New object", newObject);

/*
 Here, we see that you - the first argument was the only one with its values overridden.
  And, who did the overriding? Well, the rightmost argument, someoneElse took priority.
  me contributed whatever someoneElse didn't have, and you kept it's unique key,
  myOwnKey.
  None of the other 'object arguments' were affected - only the first one, you.
  Ok, that's still a bit confusing! Fortunately, in React, we don't see this too often because
  we generally avoid mutations. Instead, we prefer to create new objects using keys and
  values from other objects such that they are all separate.
*/


// Refactoring Object.assign using spread

const individual = {
    name: "CodeFinity",
    age: 23,
    weight: 165,
    isLying: true,
};
const you_individual = {
    name: "VisionWebSoft",
    myOwnKey: "hi",
};
const someoneElse_individual = {
    name: "Unknown",
    age: 500,
};

const newObj = { ...individual, ...you_individual, ...someoneElse_individual };
console.log(newObj, "NEW");
console.log("me", individual);
console.log("you", you_individual);
console.log("someoneElse", someoneElse_individual);


/*
References and Values
Once again, if we are working with values that are not primitives, we will still encounter
some shared reference issues. In the event that we have nested objects, for instance,
there is a nuclear option, so to speak. We can stringify our object into JSON and then
parse it back out into a whole new object.
*/

const obj = {
    name: "CodeFinity",
    address: {
        street: "123 Main St.",
        city: "Any Town",
        state: "IL",
        country: "USA",
    },
};
const objCopy = { ...obj };

// The copied object that's declared a constant is still updating - javascript quirk
objCopy.address.street = "455 Main St";
console.log(objCopy);
console.log(obj);


// Workaround to remove connection to objects
// Can also be called a clone
const objDeepCopy = JSON.parse(JSON.stringify(obj));

objDeepCopy.address.street = "500 Main St";
console.log("Deep copy / JSON stringify comparison")
console.log(obj);
console.log(objDeepCopy);


/*  CONCLUSION JS OBJECTS
Merging objects in JavaScript is a powerful tool for combining and organizing data.
Using methods like Object.assign() and the spread operator (...), you can efficiently
create new objects by combining properties from multiple sources. These techniques
help maintain immutability by creating new objects rather than modifying existing ones,
which is particularly important in React and other frameworks where immutability is
crucial for performance and predictability.
While Object.assign() provides a straightforward way to merge objects, the spread
operator offers a more concise and modern syntax. However, when dealing with nested
objects or complex references, special approaches like
JSON.parse(JSON.stringify(obj)) or structuredClone() may be necessary to ensure that
deep copies are created, preventing unintended mutations.
*/


