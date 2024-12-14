function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.sayHello = function () {
  return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
};

const person1 = new Person("Vinay", 24);
console.log(person1.sayHello());
