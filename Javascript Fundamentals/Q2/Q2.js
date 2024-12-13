function testRegex(pattern, string) {
    const regex = new RegExp(pattern);
    return regex.test(string);
}

// Test cases:
console.log(testRegex("hello", "hello world")); // true
console.log(testRegex("^world", "hello world")); // false
console.log(testRegex("\\d+", "123abc")); // true
console.log(testRegex("\\s", "hello world")); // true
