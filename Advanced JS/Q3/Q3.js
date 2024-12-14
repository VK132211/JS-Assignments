const Calculator = {
  value: 0,

  add(num) {
    this.value += num;
    return this; // Enable chaining
  },

  subtract(num) {
    this.value -= num;
    return this;
  },

  multiply(num) {
    this.value *= num;
    return this;
  },

  divide(num) {
    if (num !== 0) {
      this.value /= num;
    } else {
      console.error("Cannot divide by zero");
    }
    return this;
  },

  reset() {
    this.value = 0;
    return this;
  },

  getResult() {
    return this.value;
  },
};

const result = Calculator.add(5).multiply(2).subtract(3).divide(2).getResult();
console.log("Result:", result);
