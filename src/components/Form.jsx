import React, { useState } from 'react';

const Form = ({ setStudents, students }) => {
  const [details, setDetails] = useState({
    name: '',
    roll: '',
    hasCheckedOut: false,
    checkInTime: '',
    checkOutTime: '',
  });

  const handleChange = (e) => {
    e.preventDefault();

    const isStudentAlreadyPresent = students.some(
      (student) => student.roll === details.roll && !student.hasCheckedOut
    );

    if(isStudentAlreadyPresent) return;

    setStudents((prev) => {
      return [...prev, { ...details, checkInTime: new Date(Date.now()) }];
    });
  };

  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form className="space-y-6" action="#">
          <h5 className="text-xl font-medium text-gray-900 dark:text-white">
            Add Student
          </h5>
          <div className="w-full text-left">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Student Name
            </label>
            <input
              type="name"
              name="name"
              id="name"
              onChange={(e) => {
                setDetails({ ...details, name: e.target.value });
              }}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="Name of the student"
              required
            />
          </div>
          <div className="text-left">
            <label
              htmlFor="roll"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Roll Number
            </label>
            <input
              type="roll"
              name="roll"
              id="roll"
              onChange={(e) => {
                setDetails({ ...details, roll: e.target.value });
              }}
              placeholder="Roll number of the student"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              required
            />
          </div>
          <button
            type="submit"
            onClick={handleChange}
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add Student
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
