// JavaScript code
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
  }
}

class Employee extends Person {
  constructor(name, age, jobTitle) {
    super(name, age);
    this.jobTitle = jobTitle;
  }

  jobGreet() {
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
  }
}

const alice = new Person("Alice", 25);
alice.greet();

const bob = new Employee("Bob", 30, "Manager");
bob.jobGreet();

// Describe function
function describe(description, callback) {
  console.log(description);
  callback();
}

// Using describe function
describe("Code Description:", function() {
  console.log("This code defines two classes, Person and Employee, and demonstrates inheritance in JavaScript.");
  console.log("It also creates instances of these classes and calls their methods to display greetings.");
});