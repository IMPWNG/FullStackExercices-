import React from "react";

import Student from "./Student/Student";

function Students({ student }) {

  return (
    <div>
        <Student student={student} />
    </div>
  );
}

export default Students;
