
let car = {
    make: "Toyota",
    model: "Corolla",
    year: 2021,
    color: "red",
    drive: function() {
        console.log('The car is driving');
    }
};

car.drive();

car.color = "blue";

car.fuelType = "gasoline";

delete car.year;

let driver = {

    name: "John",
    licenseNumber: "ABC12345",
    age: 30,
};

car.driver = driver;

console.log(driver.name);

let jsonString = JSON.stringify(car);
console.log(jsonString);

console.log(JSON.parse(jsonString));

