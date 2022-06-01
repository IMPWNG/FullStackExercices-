import React, { useState, useContext } from 'react'
import { StudentsContext } from '../../context'

import { filterStudentsByName } from '../../helpers';


export default function Search() {
  //Context
  const { students } = useContext(StudentsContext);
  //State
  const [filterByName, setFilterByName] = useState('');
  const [filterByNameResulsts, setFilterByNameResults] = useState([]);
  const searchResult = [...filterByNameResulsts];

  return (
    <div>
      <input
        type="text"
        name="filterByName"
        value={filterByName}
        placeholder="Search..."
        className="p-10 text-sm"
        onChange={(e) => {
          setFilterByName(e.target.value);
        }}
        onKeyUp={(e) => {
          filterStudentsByName(
            e.target.value,
            students,
            setFilterByNameResults
          );
        }}
      />
    </div>
  );
}

