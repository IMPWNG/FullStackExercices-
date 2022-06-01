import React from "react";

import { getAverageOfGrades } from "../../helpers";

export default function Student(props) {
  const student = props.student;

  return (
    <div key={student.id} id="student">
      <div className="max-w-sm w-full lg:max-w-full lg:flex">
        <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <div className="text-gray-900 font-bold text-xl mb-2">
              <h1>{student.firstName + " " + student.lastName}</h1>
            </div>
            <p className="text-gray-700 text-base">{student.email}</p>
            <p className="text-gray-700 text-base">
              Company : {student.company}
            </p>
            <p className="text-gray-700 text-base">Skill : {student.skill}</p>
            <p className="text-gray-700 text-base">
              Average Grades : {getAverageOfGrades(student.grades).toFixed(2)}%
            </p>
          </div>
          <div className="flex items-center">
            <img src={student.images} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}