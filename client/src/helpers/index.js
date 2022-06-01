// Get the average grades of all students

const getAverageOfGrades = (grades) => {
    let sum = 0;

    for (const score of grades) {
        sum = sum + parseFloat(score);
    }
    return sum / grades.length;
};

export { getAverageOfGrades };