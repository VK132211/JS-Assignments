function factorial(n) {
  if (n < 0) return "Factorial is not defined for negative numbers.";
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}

console.log(`Factorial of 5 is: ${factorial(5)}`);
console.log(`Factorial of 0 is: ${factorial(0)}`);
console.log(`Factorial of 8 is: ${factorial(8)}`);
