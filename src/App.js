import React,{useState, useEffect, createContext} from "react";
import {  Routes, Route, Link } from 'react-router-dom';
import axios from 'axios';

import NewStudent from "./NewStudent/NewStudent";
import StudentsPage from "./StudentsPage/StudentsPage";
import HomePage from "./Hompage/HomePage";
import EditPage from "./EditPage/EditPage";
import './App.css'
export const studentsContext = createContext()
function App() {
  const [students, setStudents] = useState([])
  
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("https://643f54433dee5b763e1a4c02.mockapi.io/studentlist/students");
      setStudents(result.data);
    };
    fetchData();
  }, []);
 const UpdateStudents = (students) =>{
  setStudents(students)
 }
 
 
  return (
    <studentsContext.Provider value = {{students,UpdateStudents}}>
<div className="MainPage">
          <div className="appBar">
           
           <Link to="/"><h1>Students List App</h1></Link>
           <nav>
        <ul>
        <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/StudentList">View List</Link>
          </li>
          <li>
          <Link to="/newStudent">New Student</Link>
          </li>
        </ul>
      </nav>
         </div>
         <Routes>
          
         <Route path="/" element={<HomePage/>} />
          <Route path="/StudentList" element={<StudentsPage  />} />
          <Route path="/newStudent" element={<NewStudent />} />
          <Route path = "/edit/:id" element={<EditPage />} />
          </Routes>
         
         
</div>
</studentsContext.Provider>
  )
  
}

export default App;
