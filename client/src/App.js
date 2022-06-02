import { useContext, useState } from "react";
import { StudentsContext } from "./context";

// import { getData } from "./api/index";

import Search from "./components/Search/Search";


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
    </div>
  );
}

export default App;
