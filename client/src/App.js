import React, { useState, useEffect } from "react";

import { getData } from "./api/index";

import Search from "./components/UI/Search";
import Students from "./components/Students/Students";

function App() {
  const data = useState([]);
  const students = data.students;

  return (
    <div className="App grid place-items-center h-screen">
      <Search />
        <div>
            <Students students={students} />
        </div>
    </div>
  );
}

export default App;
