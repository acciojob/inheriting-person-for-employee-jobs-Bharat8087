// Define the Person and Employee classes
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
    super(name, age); // Call the parent class constructor
    this.jobTitle = jobTitle;
  }

  jobGreet() {
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
  }
}

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;

// Cypress test code
describe('Person and Employee Classes', () => {
  it('should create a Person and call greet method', () => {
    cy.window().then((win) => {
      const { Person } = win;
      const alice = new Person('Alice', 25);
      cy.spy(console, 'log').as('consoleLog');
      alice.greet();
      cy.get('@consoleLog').should('be.calledWith', 'Hello, my name is Alice, I am 25 years old.');
    });
  });

  it('should create an Employee and call jobGreet method', () => {
    cy.window().then((win) => {
      const { Employee } = win;
      const bob = new Employee('Bob', 30, 'Manager');
      cy.spy(console, 'log').as('consoleLog');
      bob.jobGreet();
      cy.get('@consoleLog').should('be.calledWith', 'Hello, my name is Bob, I am 30 years old, and my job title is Manager.');
    });
  });
});
