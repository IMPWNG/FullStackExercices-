import { useContext, useState } from "react";
import { StudentsContext } from "./context";

// import { getData } from "./api/index";

import Students from "./components/Students/Students";

function App() {
  // const data = useState([]);
  // const students = data.students;

  return (
    <div className="App grid place-items-center h-screen">
      {/* <Search /> */}
      <div>
            <Students />
        </div>
    </div>
  );
}

export default App;
