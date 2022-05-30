
import React, { useState, useEffect } from 'react';

import { getData } from "./api/index";

function App() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const students = data.students;

  useEffect(() => {
    const getDataFromServer = async () => {
      const data = await getData();
      setData(data);
      setLoading(false);
    };
    getDataFromServer();
  }, []);

  // Calculate the average for each student
  const averageGrades = (student) => {
    const grades = student.grades;
    // Map over the grades and return the average
    const average = grades.reduce((sum, curr) => sum + Number(curr), 0) / grades.length;
    return average;
  };

  return (
    <div className="App">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <h1>
            {students.map((student) => (
              <>
                <img src={student.pic} alt="" />
                <p>ID : {student.id}</p>
                <p>City : {student.city}</p>
                <p>Email : {student.email}</p>
                <p>First Name : {student.firstName}</p>
                <p>Last Name : {student.lastName}</p>
                {/* // Show the average of grades */}
                <p>
                  Average Grades : {averageGrades(student).toFixed(2)}%
                </p>
                <p>Skills : {student.skill}</p>
              </>
            ))}
          </h1>
        </div>
      )}
    </div>
  );
}

export default App;
