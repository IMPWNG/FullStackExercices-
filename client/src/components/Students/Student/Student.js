import React, { useState, useEffect } from "react";

import { getData } from "../../../api/index";

export default function Student() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const students = data.students;

  // Get data from API
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
    const average =
      grades.reduce((sum, curr) => sum + Number(curr), 0) / grades.length;
    return average;
  };

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {students.map((student) => (
            <>
              <div className="max-w-sm w-full lg:max-w-full lg:flex">
                <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                  <div className="mb-8">
                    <div className="text-gray-900 font-bold text-xl mb-2">
                      {student.firstName} {student.lastName}
                    </div>
                    <p className="text-gray-700 text-base">{student.email}</p>
                    <p className="text-gray-700 text-base">
                      Company : {student.company}
                    </p>
                    <p className="text-gray-700 text-base">
                      Skill : {student.skill}
                    </p>
                    <p className="text-gray-700 text-base">
                      Average Grades : {averageGrades(student).toFixed(2)}%
                    </p>
                  </div>
                  <div className="flex items-center">
                    <img src={student.pic} alt="" />
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      )}
    </div>
  );
}