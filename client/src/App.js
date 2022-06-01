import { useContext, useState } from "react";
import { StudentsContext } from "./context";

// import { getData } from "./api/index";

import Search from "./components/Search/Search";
import Students from "./components/Students/Students";

function App() {
  //Context
  const { loading, students } = useContext(StudentsContext);
  //State
  const [filterByName, setFilterByName] = useState("");
  const [filterByNameResulsts, setFilterByNameResults] = useState([]);
  const searchResult = [...filterByNameResulsts];


  return (
    <div className="App grid place-items-center h-screen">
      <div>
        <Search />
      </div>
      <div className="space-y-6 h-96 overflow-auto grid place-items-center">
        {students.map((student) => {
          return (
            <div className="">
              <Students student={student} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
