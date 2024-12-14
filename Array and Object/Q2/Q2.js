const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// Sort the array and find the min and max age
const sortedAges = [...ages].sort((a, b) => a - b);
const minAge = sortedAges[0];
const maxAge = sortedAges[sortedAges.length - 1];

console.log("Sorted ages:", sortedAges);
console.log("Min age:", minAge);
console.log("Max age:", maxAge);

// Find the median age
const middleIndex = Math.floor(sortedAges.length / 2);
let medianAge;

if (sortedAges.length % 2 === 0) {
  medianAge = (sortedAges[middleIndex - 1] + sortedAges[middleIndex]) / 2;
} else {
  medianAge = sortedAges[middleIndex];
}

console.log("Median age is:", medianAge);

// Find the average age
const totalAge = ages.reduce((sum, age) => sum + age, 0);
const averageAge = totalAge / ages.length;
console.log("Average age is:", averageAge);

// Find the range of the ages (max - min)
const range = maxAge - minAge;
console.log("Range is:", range);

// Compare the value of (min - average) and (max - average), use abs() method
const minDiff = Math.abs(minAge - averageAge);
const maxDiff = Math.abs(maxAge - averageAge);

console.log("Difference between min and average:", minDiff);
console.log("Difference between max and average:", maxDiff);
