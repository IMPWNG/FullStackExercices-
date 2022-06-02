import React, { useState, useContext } from 'react'
import { StudentsContext } from '../../context'

// import { filterStudentsByName } from '../../helpers';

import Students from "../Students/Students";


export default function Search() {
  //Context
  const { students } = useContext(StudentsContext);
  //State
  const [ query, setQuery ] = useState('');


  // const [filterByName, setFilterByName] = useState('');
  // const [filterByNameResulsts, setFilterByNameResults] = useState([]);
  // const searchResult = [...filterByNameResulsts];


  return (
    <div>
      <input
        type="text"
        name="filterByName"
        placeholder="Search..."
        className="p-10 text-sm"
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
      <div className="space-y-6 h-96 overflow-auto grid place-items-center">
        {students.map((student) => {
          if (student.firstName.toLowerCase().includes(query.toLowerCase())) {
            return (
              <Students
                key={student.id}
                student={student}
              />
            )
          }
        })}
      </div>
    </div>
  );
}

