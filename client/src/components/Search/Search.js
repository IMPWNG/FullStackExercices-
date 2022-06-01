import React, { useState, useEffect } from 'react'

import { getStudents } from "../../api/index";


export default function Search() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const students = data.students;

  // Get data from API
  useEffect(() => {
    const getDataFromServer = async () => {
      const data = await getStudents();
      setData(data);
      setLoading(false);
    };
    getDataFromServer();
  }, []);


  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        className="p-10 text-sm"
        onChange={(e) => setQuery(e.target.value)}
      />
      {loading ? (
        <div>Loading...</div>
      ) : (
        <ul className="p-0 text-center">
          {students
              .map((student) => (
                <>
                  <li
                    key={student.id}
                    className="mb-5 text-sm text-red-500 font-light"
                  >
                    {student.firstName}
                  </li>
                </>
              ))
          }
        </ul>
      )}
    </div>
  );
}

