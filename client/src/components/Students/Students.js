import React from 'react'

import Student from '../Student/Student'

function Students(props) {
    const student = props.student;
  return (
    <div className="border-double border-4 border-sky-500">
      <Student student={student} />
    </div>
  );
}

export default Students