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
    return `${this.greet()} and my job title is ${this.jobTitle}.`;
  }
}

const person = new Person('Alice', 25);
console.log(person.greet());

const employee = new Employee('Bob', 30, 'Manager');
console.log(employee.jobGreet());
describe('Person and Employee Classes', () => {
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
      return `${this.greet()} and my job title is ${this.jobTitle}.`;
    }
  }

  it('should create a Person and call the greet method', function () {
    const person = new Person('Alice', 25);
    const greetMessage = person.greet();
    expect(greetMessage).to.equal('Hello, my name is Alice, I am 25 years old.');
  });

  it('should create an Employee and call the jobGreet method', function () {
    const employee = new Employee('Bob', 30, 'Manager');
    const jobGreetMessage = employee.jobGreet();
    expect(jobGreetMessage).to.equal('Hello, my name is Bob, I am 30 years old and my job title is Manager.');
  });
});
