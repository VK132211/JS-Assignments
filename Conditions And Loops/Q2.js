function getGrade(marks) {
  if (marks > 90) {
    return "A";
  } else if (marks > 70) {
    return "B";
  } else if (marks > 50) {
    return "C";
  } else {
    return "F";
  }
}

let marks = 85;
console.log("Your grade is: " + getGrade(marks));
