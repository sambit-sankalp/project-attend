import React from 'react';
import StudentRow from './StudentRow';

const Table = ({ data, setStudents }) => {
  return (
    <div className="my-5">
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Student name
              </th>
              <th scope="col" className="px-6 py-3">
                Roll Number
              </th>
              <th scope="col" className="px-6 py-3">
                Check-In
              </th>
              <th scope="col" className="px-6 py-3">
                Check-out
              </th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((student, index) => (
                <StudentRow
                  key={`${student.roll}-${index}`}
                  student={student}
                  setStudents={setStudents}
                />
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
