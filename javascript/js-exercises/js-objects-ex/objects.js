
// Exercise optional chaining
const book = {
         title: "JavaScript Basics",
         edition: "Second",
         author: {
             name: "John Doe",
             social: {
                 twitter: "@johndoe",
             }
        }
};
// Use optional chaining to access the Twitter handle
console.log(book.author?.social?.twitter);
// Try accessing a non-existent property using optional
console.log(book.publisher?.name);

console.log(book?.edition || "No edition available");


// Exercise Object shorthand

const title1 = "Software Engineer";
const company1 = "Tech Corp";
const location1 = "New York";
/*const job = {
     title: title,
     company: company,
     location: location
    };
console.log(job);*/

// Refactor
const refactorJob = {
     title1,
     company1,
     location1,
    };
console.log(refactorJob);


// Destructuring
const book2 = {
     title2: "The Great Gatsby",
     author2: "F. Scott Fitzgerald",
     year2: 1925,
};

const { title2, author2, year2 } = book2;
console.log(JSON.stringify(book2, null, 0));


// Object assign & spread
const user = {
     name: "Alice",
     age: 28,
};
const job2 = {
     title: "Software Engineer",
     company: "Tech Corp",
};
const location2 = {
     name: "Alison",
     city: "New York",
     country: "USA",
};

const userProfile = Object.assign({}, user, job2, location2);
console.log(userProfile);


const userProfileSpread = { ...user, ...job2, ...location2 };
console.log("Profile Using Spread", userProfileSpread);