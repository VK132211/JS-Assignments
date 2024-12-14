const student = {
  name: "Alice",
  age: 22,
  major: "Computer Science",
  GPA: 3.8,
  isEnrolled: true,
};
function displayStudentInfo(student) {
  for (let prop in student) {
    console.log(`Property: ${prop}, Value: ${student[prop]}`);
  }
}
displayStudentInfo(student);
