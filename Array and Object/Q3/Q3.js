// a) Prevent further additions to the student object
const student = { id: 1, firstName: "John", lastName: "Doe", age: 20, grade: "A" };
Object.preventExtensions(student);

// b) Check if the student object is extensible
const extensibleStatus = Object.isExtensible(student);

// c) Create a new object with 'subject' property set to 'Math'
const props = { subject: "Math" };
const teacher = Object.create(null); // Create an object without prototype
teacher.subject = props.subject;

// d) Seal the teacher object
Object.seal(teacher);

// e) Check if the teacher object is sealed
const sealedStatus = Object.isSealed(teacher);

// f) Print the statuses
console.log("Extensible Status (student):", extensibleStatus); // false
console.log("Sealed Status (teacher):", sealedStatus); // true
