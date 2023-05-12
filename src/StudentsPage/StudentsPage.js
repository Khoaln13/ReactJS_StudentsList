/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useMemo, useEffect, useContext } from 'react'
import {  Link } from 'react-router-dom';
import { Table } from 'react-bootstrap'
import { studentsContext } from '../App';
import './StudentsPage.css'

function StudentsPage () {
  const {students, UpdateStudents} = useContext(studentsContext)
  
  const [activePage, setActivePage] = useState(1);
  const usersPerPage = 10
  useEffect(()=>{
    UpdateStudents(students)
  },[students])
  const pagesNumber = useMemo(() => {
    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(students.length / usersPerPage); i++) {
      pageNumbers.push(i);
    }
    return pageNumbers
  }, [students])


  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
  };
  
  
  const handleDeleteStudent = (id) => {
    if (window.confirm("Are you sure you want to delete this student?")) {
      const newStudents = [...students];
      const index = newStudents.findIndex((student) => student.id === id);
      newStudents.splice(index, 1);
      UpdateStudents(newStudents);
    }
  };
  // Logic for displaying current users
  const indexOfLastUser = activePage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = students.slice(indexOfFirstUser, indexOfLastUser);

  return (
    <div className="StudentsList">
      <Table className="Table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Birthday</th>
            <th>Gender</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Email</th>
            <th>School Year</th>
            <th>Student Code</th>
            <th>CPA</th>
            <th>Actions</th>
            

          </tr>
        </thead>
        <tbody>
          {currentUsers.map((student) => (
            <tr key={student.id} className='StudentItem' >
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.birthday}</td>
              <td>{student.gender}</td>
              <td>{student.address}</td>
              <td>{student.phone}</td>
              <td>{student.email}</td>
              <td>{student.schoolYear}</td>
              <td>{student.studentCode}</td>
              <td>{student.CPA}</td>
              <td className='action-buttons'>
                <button className="editBtn"> <Link to={`/edit/${student.id}`}>Edit</Link></button>
                <button className="deleteBtn" onClick={() => handleDeleteStudent(student.id)}>Delete</button>
              </td> 
            </tr>
          ))}
        </tbody>
      </Table>
         <nav>
         <ul>{pagesNumber.map((number) => (
          <li key = {number}>
            <button href = "!#" onClick = {() => {
              handlePageChange(number)
            }}>
              {number}
            </button>
          </li>
        ))}
        </ul>
         </nav>
         
    </div>
  );
    
}
export default StudentsPage