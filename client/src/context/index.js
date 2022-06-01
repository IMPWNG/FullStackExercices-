import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

export const StudentsContext = createContext();

export default function StudentsProvider(props) {
  const [loading, setLoading] = useState(null);
  const [students, setStudents] = useState([]);

  // API call
  useEffect(() => {
    setLoading("Processing...");
    const getData = async () => axios.get(SERVER_URL)
    // Get data from API
      .then((res) => {
        setStudents(res.data.students);
        setLoading(null);
      })
      .catch((err) => {
        console.log(err);
        setLoading("Failed to get data");
      });
    getData();
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
