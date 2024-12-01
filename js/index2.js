// How do you create an object car with properties like brand, model, and year and access them to print their values?
let car={
    brand:"Ford",
    model:"Mustang",
    year:1969
};
console.log(car.brand);
console.log(car.model);
console.log(car.year);
// How can you add properties to an empty object person and then delete a specific property?
let person={};
person.firstName="Sai kumar";
person.lastName="Ponnam";
person.age=21;
delete person.age;
console.log(person);
// What approach would you use to check if a specific property exists in an object like book?
let book={
    title:"Don't believe everything u think ",
    author:"Joseph neugon"
};
function hasProperty(obj,prop){
    return prop in obj;
}
console.log(hasProperty(book,"title"));
console.log(hasProperty(book,"year"));
// How can you iterate through all properties of an object student and print their key-value pairs?
let student={
    name:"Sai",
    age:21,
    grade:"A"
};
for(let key in student){
    console.log(key,student[key]);
}
// How do you write a function that counts the number of properties in an object?
function countProperties(obj) {
    let count = 0;
    for (let key in obj) {
      count++;
    }
    return count;
  }
  
  let user = {
    name: "John",
    age: 30,
    isAdmin: true
  };
  
  console.log(countProperties(user)); 
//   How can you add methods like add and subtract to an object calculator that use its properties to perform calculations?
let calculator = {
    num1: 10,
    num2: 5,
    add() {
      return this.num1 + this.num2;
    },
    subtract() {
      return this.num1 - this.num2;
    }
  };
  
  console.log(calculator.add());       
  console.log(calculator.subtract());  
//   What steps are involved in cloning an object user into a new object?
let user1 = {
    name: "Sam",
    age: 28
  };
  
  function cloneObject(obj) {
    let clone = {};
    for (let key in obj) {
      clone[key] = obj[key];
    }
    return clone;
  }
  
  let userClone = cloneObject(user1);
  console.log(userClone);  
//   How can you merge two objects, userInfo1 and userInfo2, into a new object while resolving property conflicts
let userInfo1 = {
    name: "Jane",
    age: 22
  };
  
  let userInfo2 = {
    age: 23,
    city: "New York"
  };
  
  let mergedUser = Object.assign({}, userInfo1, userInfo2);
  
  console.log(mergedUser); 
//   How do you create a function that generates an object with default values if certain properties are not provided?
function createUser(name, age, role = "user") {
    return {
      name: name,
      age: age,
      role: role
    };
  }
  
  let newUser = createUser("Tom", 30);
  console.log(newUser);  
//   What is the best way to structure an object company with nested arrays of objects representing employees?
let company = {
    name: "Tech Corp",
    employees: [
      { name: "Alice", position: "Developer" },
      { name: "Bob", position: "Designer" }
    ]
  };
  
  console.log(company.employees[0].name);   
  console.log(company.employees[1].position);  
//   How can you extract all the keys or values of an object like fruitPrices into arrays?
let fruitPrices = {
    apple: 2,
    banana: 1,
    cherry: 3
  };
  
  function getKeys(obj) {
    return Object.keys(obj);
  }
  
  function getValues(obj) {
    return Object.values(obj);
  }
  
  console.log(getKeys(fruitPrices));   
  console.log(getValues(fruitPrices)); 
//   How do you write a function to sort the properties of an object salaries based on their values?
let salaries = {
    John: 200,
    Ann: 150,
    Pete: 300
  };
  
  function sortSalaries(obj) {
    return Object.keys(obj).sort((a, b) => obj[a] - obj[b]);
  }
  
  console.log(sortSalaries(salaries));  
//   What is object destructuring, and how can it be used to extract values from an object user?
let user2 = {
    name: "Emily",
    age: 25,
    city: "London"
  };
  
  let { name, age, city } = user2;
  
  console.log(name);  
  console.log(age);   
  console.log(city);  
//   How can you destructure a nested object like person to access deeply nested properties
let person1 = {
    name: "James",
    age: 32,
    address: {
      street: "Main St",
      city1: "New York",
      zipCode: 10001
    }
  };
  
  let { address: { street, city1, zipCode } } = person1;
  
  console.log(street);  
  console.log(city);    
  console.log(zipCode); 
//   How can you merge two objects using the spread syntax, and what is its advantage over other methods?
let user3 = { name: "Alice", age: 30 };
let user4 = { city: "Paris", country: "France" };

let mergedUser1 = { ...user3, ...user4 };

console.log(mergedUser1); 
// What happens when you use Object.freeze() on an object, and how can you verify that it works?
let settings = {
    theme: "dark",
    fontSize: "16px",
    language: "en"
  };
  
  Object.freeze(settings);
  
  settings.theme = "light"; 
  console.log(settings);    
//   How can you use Object.entries() to convert an object into an array of key-value pairs?
let scores = {
    math: 90,
    english: 80,
    science: 85
  };
  
  let scoreEntries = Object.entries(scores);
  console.log(scoreEntries);
//   How do you write a function to modify the values of an object like team by a given increment?
let team = {
    player1: 5,
    player2: 10,
    player3: 7
  };
  
  function updateScore(obj, increment) {
    for (let key in obj) {
      obj[key] += increment;
    }
  }
  
  updateScore(team, 3);
  console.log(team);  
//  How can you use the this keyword in an object method to refer to the object's properties?
let rectangle = {
    width: 10,
    height: 5,
    area() {
      return this.width * this.height;
    }
  };
  
  console.log(rectangle.area()); 
//   How can you find the property with the highest value in an object like products and return its key?
let products = {
    "laptop": 1000,
    "phone": 500,
    "tablet": 700
  };
  
  function findMaxPrice(obj) {
    let maxPrice = 0;
    let maxProduct = "";
  
    for (let key in obj) {
      if (obj[key] > maxPrice) {
        maxPrice = obj[key];
        maxProduct = key;
      }
    }
  
    return maxProduct;
  }
  
  console.log(findMaxPrice(products));  
  
  
  
  
  