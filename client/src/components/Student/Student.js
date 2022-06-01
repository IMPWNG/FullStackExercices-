import React from "react";

import { getAverageOfGrades } from "../../helpers";

export default function Student(props) {
  const student = props.student;

  return (
    <div key={student.id} id="student" className="text-center">
      <div className="text-red-500 font-bold text-xl">
        <h1>{student.firstName + " " + student.lastName}</h1>
      </div>
      <div className="text-gray-700">{student.email}</div>
      <div className="text-gray-700">Company : {student.company}</div>
      <div className="text-gray-700">Skill : {student.skill}</div>
      <div className="text-gray-700">
        Average Grades : {getAverageOfGrades(student.grades).toFixed(2)}%
      </div>
    </div>
  );
}
