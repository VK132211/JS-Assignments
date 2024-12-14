Array.prototype.customIncludes = function (element) {
  for (let i = 0; i < this.length; i++) {
    if (this[i] === element) {
      return true;
    }
  }
  return false;
};

const array = [1, 2, 3, 4, 5];
console.log(array.customIncludes(3)); // true
console.log(array.customIncludes(6)); // false
