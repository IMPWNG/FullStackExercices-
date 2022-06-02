import { useEffect } from "react";
// Get the average grades of all students
const getAverageOfGrades = (grades) => {
    let sum = 0;

    for (const score of grades) {
        sum = sum + parseFloat(score);
    }
    return sum / grades.length;
};

// const filterStudentsByName = (name, students, setResults) => {
//   // Search for students by name
//     const results = students.filter((student) => {
//         return student.firstName.toLowerCase().includes(name.toLowerCase());
//     }
//     );
//     setResults(results);
    
// };




export { getAverageOfGrades };