/// <reference types="cypress" />

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hello, my name is ${this.name}, I am ${this.age} years old.`;
  }
}

class Employee extends Person {
  constructor(name, age, jobTitle) {
    super(name, age);
    this.jobTitle = jobTitle;
  }

  jobGreet() {
    return `Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`;
  }
}

describe('Person and Employee Classes', () => {
  let PersonClass, EmployeeClass;

  before(() => {
    PersonClass = Person;
    EmployeeClass = Employee;
  });

  it('should create a Person and call the greet method', function () {
    const person = new PersonClass('Alice', 25);
    const greetMessage = person.greet();
    expect(greetMessage).to.equal('Hello, my name is Alice, I am 25 years old.');
  });

  it('should create an Employee and call the jobGreet method', function () {
    const employee = new EmployeeClass('Bob', 30, 'Manager');
    const jobGreetMessage = employee.jobGreet();
    expect(jobGreetMessage).to.equal('Hello, my name is Bob, I am 30 years old, and my job title is Manager.');
  });
});
