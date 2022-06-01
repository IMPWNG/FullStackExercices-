import { useContext, useState } from "react";
import { StudentsContext } from "./context";

// import { getData } from "./api/index";

import Student from "././components/Students/Student/Student";
// import Search from "./components/Search/Search";

function App() {
const { loading, students } = useContext(StudentsContext);


  return (
    <div className="App grid place-items-center h-screen">
    
      <div>
          {students.map((student) => (
            <>
              <Student student={student} />
            </>
            ))}
            
        </div>
    </div>
  );
}

export default App;
