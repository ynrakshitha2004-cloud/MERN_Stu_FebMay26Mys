// Basics of Objects
const Person = {
    name:"Rakshi",
    age:22,
    isStudent: false
};

console.log(" Name :",Person.name);
console.log(" Name :",Person["age"]);

//Add a new property
Person.city = "Mysore";
console.log(" Person :",Person);
//Modify
Person.age = 31;
//delete person
delete Person.isStudent;
console.log(" Person ",Person);

//Object constructor
const car = new Object();
car.Make = "Audi";
car.Model = "A4";
car.year = 2026;
console.log("car:",car);

