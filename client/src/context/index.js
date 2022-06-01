import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

export const StudentsContext = createContext();

export default function StudentsProvider(props) {
  const [loading, setLoading] = useState(null);
  const [students, setStudents] = useState([]);

  // API call
 useEffect(() => {
    setLoading(true);
    axios
      .get(SERVER_URL)
      .then((res) => {
        setStudents(res.data.students);
        setLoading("found");
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  
  return (
    <StudentsContext.Provider
      value={{
        students,
        loading,
      }}
    >
      {props.children}
    </StudentsContext.Provider>
  );
}

