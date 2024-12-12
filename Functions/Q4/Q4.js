function calculateTax() {
  return (income) => {
    if (income <= 30000) {
      return income * 0.1; // 10% tax
    } else if (income <= 100000) {
      return income * 0.2; // 20% tax
    } else {
      return income * 0.3; // 30% tax
    }
  };
}

const taxCalculator = calculateTax();
console.log(`Tax for income Rs.25,000: Rs.${taxCalculator(25000)}`);
console.log(`Tax for income Rs.75,000: Rs.${taxCalculator(75000)}`);
console.log(`Tax for income Rs.150,000:Rs.${taxCalculator(150000)}`);
