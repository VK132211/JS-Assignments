function addStudent(obj) {
  if (students.some((student) => student.id === obj.id)) {
    console.error("Student with this ID already exists.");
    return students;
  }
  students.push(obj);
  console.log("Student added successfully:", obj);
  return students;
}
function updateStudent(id, updatedInfo) {
  let student = students.find((student) => student.id === id);
  if (!student) {
    console.error("Student not found.");
    return students;
  }
  Object.assign(student, updatedInfo);
  console.log("Updated student:", student);
  return students;
}

function deleteStudent(id) {
  const index = students.findIndex((student) => student.id === id);
  if (index === -1) {
    console.error("Student not found.");
    return students;
  }
  const removedStudent = students.splice(index, 1)[0];
  console.log("Deleted student:", removedStudent);
  return students;
}

function listAllStudents() {
  if (students.length === 0) {
    console.log("No students found.");
  } else {
    console.log("List of all students:");
    students.forEach((student) => {
      console.log(
        `${student.id}: ${student.firstName} ${student.lastName}, Age: ${student.age}, Grade: ${student.grade}`
      );
    });
  }
}

function findStudentsByGrade(grade) {
  const matchingStudents = students.filter((student) => student.grade === grade);
  if (matchingStudents.length === 0) {
    console.log(`No students found with grade ${grade}.`);
  } else {
    console.log(`Students with grade ${grade}:`, matchingStudents);
  }
  return matchingStudents;
}

function calculateAverageAge() {
  if (students.length === 0) {
    console.log("No students available to calculate average age.");
    return 0;
  }
  const totalAge = students.reduce((sum, student) => sum + student.age, 0);
  const averageAge = totalAge / students.length;
  console.log(`Average age of students: ${averageAge.toFixed(2)}`);
  return averageAge;
}

const students = [
  { id: 1, firstName: "John", lastName: "Doe", age: 20, grade: "A" },
  { id: 2, firstName: "Jane", lastName: "Smith", age: 22, grade: "B" },
  { id: 3, firstName: "Bob", lastName: "Johnson", age: 19, grade: "A" },
];

// Adding a new student
addStudent({ id: 4, firstName: "Alice", lastName: "Williams", age: 21, grade: "C" });

// Updating a student's information
updateStudent(1, { age: 21, grade: "A+" });

// Deleting a student
deleteStudent(2);

// Listing all students
listAllStudents();

// Finding students by grade
findStudentsByGrade("A");

// Calculating average age
calculateAverageAge();
