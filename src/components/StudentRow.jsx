import React, { useState } from 'react';

const StudentRow = ({ student, setStudents }) => {
  const [checkOutTime, setcheckOutTime] = useState('');

  const checkIn = new Date(student.checkInTime);

  const handleCheckout = (e) => {
    e.preventDefault();
    setcheckOutTime(new Date(Date.now()));

    setStudents((prev) => {
      return prev.map((stud) => {
        if (stud.roll === student.roll) {
          return {
            ...stud,
            hasCheckedOut: true,
            checkOutTime: new Date(Date.now()),
          };
        }
        return stud;
      });
    });
  };

  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {student.name}
      </th>
      <td className="px-6 py-4">{student.roll}</td>
      <td className="px-6 py-4">
        {checkIn.getHours()} : {checkIn.getMinutes()}
      </td>
      {student.hasCheckedOut ? (
        <td className="px-6 py-4">
          {checkOutTime.getHours()} : {checkOutTime.getMinutes()}
        </td>
      ) : (
        <td className="px-6 py-4">
          <button
            onClick={handleCheckout}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Check-Out
          </button>
        </td>
      )}
    </tr>
  );
};

export default StudentRow;
