

let fruits = ["apple", "banana", "cherry", "date"];

console.log(fruits);

fruits[fruits.indexOf("banana")] = "blueberry";

fruits.push("elderberry");

let removedFirst = fruits.shift();
console.log("Removed first element:", removedFirst);

let removedLast = fruits.pop();
console.log("Removed last element:", removedLast);

console.log("Updated array:", fruits);

console.log("All elements in the array:");
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

console.log("Skipping every other element:");
for (let i = 0; i < fruits.length; i += 2) {
  console.log(fruits[i]);
}

// indexOf() to find the index of "cherry"
let cherryIndex = fruits.indexOf("cherry");
console.log("Index of 'cherry':", cherryIndex);

//splice() to remove "cherry" from the array
fruits.splice(cherryIndex, 1);

// concat() to add another array ["fig", "grape", "honeydew"] to fruits
let additionalFruits = ["fig", "grape", "honeydew"];
let finalArray = fruits.concat(additionalFruits);

// final array
console.log("Final array:", finalArray);


// Bonus
let randomNumbers = [];

for (let i = 0; i < 10; i++) {
    randomNumbers.push(Math.floor(Math.random() * 5) + 1);
}
console.log(randomNumbers);

numbers = [0,0,0,0,0];
for (let i = 0; i < randomNumbers.length; i++) {
      numbers[randomNumbers[i]-1]++;
}


for (let i = 0; i < numbers.length; i++) {
    console.log("The number", i+1+" appears", numbers[i], "times");
}

let max_val = Math.max.apply(null, numbers);
console.log("Highest Frequency First", numbers.indexOf(max_val) + 1);
console.log("Highest Frequency", numbers.lastIndexOf(max_val) + 1);
