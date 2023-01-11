const calculateGPA = (gradesList) => {
  let sumGradePoints = 0;
  gradesList.forEach((grade) => {
    switch (grade) {
      case "A":
        sumGradePoints += 4.0;
        break;
      case "A-":
        sumGradePoints += 3.7;
        break;
      case "B+":
        sumGradePoints += 3.3;
        break;
      case "B":
        sumGradePoints += 3;
        break;
      case "B-":
        sumGradePoints += 2.7;
        break;
      case "C+":
        sumGradePoints += 2.3;
        break;
      case "C":
        sumGradePoints += 2;
        break;
      case "C-":
        sumGradePoints += 1.7;
        break;
      case "D+":
        sumGradePoints += 1.3;
        break;
      case "D":
        sumGradePoints += 1.0;
        break;
      case "D-":
        sumGradePoints += 0.7;
        break;
      case "F":
        sumGradePoints += 0.0;
        break;
      default:
        console.log("ERROR");
    }
  });
  let gpa = sumGradePoints / gradesList.length;
  return gpa.toFixed(1);
};
console.log(calculateGPA(['A'])); // Output: 4
console.log(calculateGPA(['F', 'F', 'F'])); // Output: 0
console.log(calculateGPA(['A', 'A-', 'B+', 'B', 'B-'])); // Output: 3.3
console.log(calculateGPA(['A', 'B+', 'C-', 'A'])); // Output: 3.3

const gradePoints = {
  "A": 4,
  "A-": 3.7,
  "B+": 3.3,
  "B": 3,
  "B-": 2.7,
  "C+": 2.3,
  "C": 2,
  "C-": 1.7,
  "D+": 1.3,
  "D": 1,
  "D-": 0.7,
  "F": 0,
};

const calculateAvgGPA = (gradesList) => {
  let sum = 0;
  gradesList.forEach(grade => {
    sum += gradePoints[grade];
  })
  let gpa = sum/gradesList.length;
  return gpa.toFixed(1);
}
console.log(calculateAvgGPA(['A'])); // Output: 4
console.log(calculateAvgGPA(['F', 'F', 'F'])); // Output: 0
console.log(calculateAvgGPA(['A', 'A-', 'B+', 'B', 'B-'])); // Output: 3.3
console.log(calculateAvgGPA(['A', 'B+', 'C-', 'A'])); // Output: 3.3
