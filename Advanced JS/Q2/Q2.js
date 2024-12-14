function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.sayHello = function () {
  return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
};

function Employee(name, age, designation) {
  Person.call(this, name, age); // Inherit properties from Person
  this.designation = designation;
}

// Inherit prototype methods from Person
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

// Add a new method
Employee.prototype.getDetails = function () {
  return `Name: ${this.name}, Age: ${this.age}, Designation: ${this.designation}`;
};

const employee1 = new Employee("Bob", 40, "Manager");
console.log(employee1.sayHello());
console.log(employee1.getDetails());
