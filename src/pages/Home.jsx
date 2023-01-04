import React, { useEffect, useState } from 'react';
import Form from '../components/Form';
import Table from '../components/Table';

const Home = () => {
  const [students, setStudents] = useState([]);
  const [studentNumber, setstudentNumber] = useState(0);

  useEffect(() => {
    const presentStudents = students.filter(
      (student) => !student.hasCheckedOut
    );
    setstudentNumber(presentStudents.length);
  }, [students]);

  return (
    <div className="m-5 flex justify-center items-center">
      <div className="w-11/12">
        <Form setStudents={setStudents} students={students} />
        {studentNumber > 0 ? (
          <div className="px-6 py-4 text-left">
            Number of Students: {studentNumber}
          </div>
        ) : (
          <div className="px-6 py-4 text-left">No Students in the class</div>
        )}
        <Table data={students} setStudents={setStudents} />
      </div>
    </div>
  );
};

export default Home;
