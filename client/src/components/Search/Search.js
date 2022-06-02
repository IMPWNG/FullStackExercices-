import React, { useState, useContext } from 'react'
import { StudentsContext } from '../../context'

// import { filterStudentsByName } from '../../helpers';

import Students from "../Students/Students";


export default function Search(student) {
  //Context
  const { students } = useContext(StudentsContext);

  //State
  const [ query, setQuery ] = useState('');


  // const [filterByName, setFilterByName] = useState('');
  // const [filterByNameResulsts, setFilterByNameResults] = useState([]);
  // const searchResult = [...filterByNameResulsts];

  // search with all the key possible
   
  const finalSearch = students.filter(student => {
    return (
      student.firstName.toLowerCase().includes(query.toLowerCase()) ||
      student.lastName.toLowerCase().includes(query.toLowerCase()) ||
      student.email.toLowerCase().includes(query.toLowerCase()) ||
      student.company.toLowerCase().includes(query.toLowerCase()) ||
      student.skill.toLowerCase().includes(query.toLowerCase())
    );

    // search by grades
    // 
     
  })
 
  return (
    <div className='p-2.5 text-lg'>
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
          if (finalSearch.includes(student)) {
            return <Students student={student} key={student.id} />
          }
        })}
      </div>
    </div>
  );
}

