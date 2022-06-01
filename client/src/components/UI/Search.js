import React, { useState } from 'react'

function Search({ placeholder, student }) {
  const [filteredStudent, setFilteredStudent] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (e) => {
    const searchWord = e.target.value;
    setWordEntered(searchWord);
    const newFilter = student.filter((student) => {
      return student.firstName.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredStudent([]);
    } else {
      setFilteredStudent(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredStudent([]);
    setWordEntered("");
  };

  return (
    <div className="flex border-2 rounded">
      <input
        type="text"
        className="px-4 py-2 w-80"
        placeholder={placeholder}
        value={wordEntered}
        onChange={handleFilter}
      />
      <div className="SearchIcon">
        {filteredStudent.length > 0 ? (
          <button className="flex items-center justify-center px-4 border-r">
            <svg
              className="w-6 h-6 text-gray-600"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"></path>
            </svg>
          </button>
        ) : (
          <button
            className="flex items-center justify-center px-4 border-r"
            onClick={clearInput}
          >
            <svg
              className="w-6 h-6 text-gray-600"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
            </svg>
          </button>
        )}
      </div>
      {filteredStudent.length !== 0 && (
        <div className="flex flex-col">
          {filteredStudent.slice(0, 15).map((student) => {
            return (
              <div className="flex items-center justify-between px-4 py-2 border-b">
                <div className="flex items-center">
                  <img
                    src={student.pic}
                    alt=""
                    className="w-10 h-10 rounded-full mr-4"
                  />
                  <div className="flex flex-col">
                    <p className="text-gray-700 font-bold">
                      {student.firstName} {student.lastName}
                    </p>
                    <p className="text-gray-500">{student.city}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-6 h-6 text-gray-600"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"></path>
                  </svg>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Search