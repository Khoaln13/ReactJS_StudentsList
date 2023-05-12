import React, { useState, useRef, useContext} from 'react';
import { useParams } from 'react-router-dom';


import * as Validators from '../Validator/Validator'
import { studentsContext } from '../App';
import '../NewStudent/NewStudent.css'
import './EditPage.css'


function EditPage (){
    
    const [nameError, setNameError] = useState()
    const [genderError, setGenderError] = useState()
    const [birthdayError, setBirthdayError] = useState()
    const [phoneError, setPhoneError] = useState()
    const [emailError, setEmailError] = useState()
    const [addressError, setAddressError] = useState()
    const [schoolYearError, setSchoolYearError] = useState()
    const [studentCodeError, setStudentCodeError] = useState()
    const [CPAError, setCPAError] = useState()

    const {students,UpdateStudents} = useContext(studentsContext)

    const [notification, setNotification] = useState(null);
    const showNotification = (message) => {
      setNotification(message);
      setTimeout(() => {
        setNotification(null);
      }, 3000);
    };
    function handleUpdateStudent(updatedStudent) {
      const updatedStudents = students.map((student) =>
        student.id === updatedStudent.id ? updatedStudent : student
      );
      UpdateStudents(updatedStudents)
      showNotification("Student updated successfully!");
    }



    const {id} = useParams()
    const [formData, setFormData] = useState(()=>{
      const foundStudent = students.find(student => student.id == id)||''
      return foundStudent
    });
    const radioRef = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  
 const setError = () =>{
    setNameError(Validators.validateName(formData.name))
    setBirthdayError(Validators.validateBirthday(formData.birthday)) 
    setGenderError(Validators.validateGender(formData.gender))
    setPhoneError(Validators.validatePhone(formData.phone))
    setEmailError(Validators.validateEmail(formData.email))
    setAddressError(Validators.validateAddress(formData.address))
    setSchoolYearError(Validators.validateSchoolYear(formData.schoolYear)) 
    setStudentCodeError(Validators.validateStudentCode(formData.studentCode)) 
    setCPAError(Validators.validateCPA(formData.CPA))
 } 
 const isObjectOK = (Object) => {
  
       for (var prop in Object){
        
        if(!Object[prop]){
          return false
        }
       }
      return true
 }
  const getStudentUpdateValue = (e) => {
    e.preventDefault();
     setError()
     var result 
     if(isObjectOK(formData)){
      result = formData
     }
     handleUpdateStudent(result);
  };
  
  return (
    (formData &&
      <form onSubmit={getStudentUpdateValue}>
        {notification && <div className="notification">{notification}</div>}
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        /><br/>
        {nameError && <span className="Error">{nameError}</span>}
      </div>
      <div>
        <label htmlFor="birthday">Birthday</label>
        <input
          type="date"
          name="birthday"
          value={formData.birthday}
          onChange={handleChange}
        /><br/>
        {birthdayError && <span className="Error">{birthdayError}</span>}
      </div>
      <div>
        <label htmlFor="gender">Gender</label>
        <input
          type="radio"
          name="gender"
          value="male"
          ref={radioRef}
          onChange={handleChange}
        />{' '}
        Male
        <input
          type="radio"
          name="gender"
          value="female"
          ref={radioRef}
          onChange={handleChange}
        />{' '}
        Female
        <br />
        {genderError && <span className="Error">{genderError}</span>}
      </div>
      <div>
        <label htmlFor="phone">Phone</label>
        <input
          type="text"
          name="phone"
          
          value={formData.phone}
          onChange={handleChange}
        /><br/>
        {phoneError && <span className="Error">{phoneError}</span>}
      </div>
      
      <div>
        <label htmlFor="address">Address</label>
        <textarea name="address" value={formData.address} onChange={handleChange} /><br/>
        {addressError && <span className="Error">{addressError}</span>}
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        /><br/>
        {emailError && <span className="Error">{emailError}</span>}
      </div>
      <div>
        <label htmlFor="schoolYear">School Year</label>
        <select name="schoolYear" value={formData.schoolYear} onChange={handleChange}>
          <option value="">--Select School Year--</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="4">5</option>

        </select><br/>
        {schoolYearError && <span className="Error">{schoolYearError}</span>}
      </div>
      <div>
        <label htmlFor="studentCode">Student Code</label>
        <input
          type="text"
          name="studentCode"
          value={formData.studentCode}
          onChange={handleChange}
        /><br/>
        {studentCodeError && <span className="Error">{studentCodeError}</span>}
      </div>
      <div>
        <label htmlFor="CPA">CPA</label>
        <input
          type="number"
          name="CPA"
          value={formData.CPA}
          onChange={handleChange}
        /><br/>
        {CPAError && <span className="Error">{CPAError}</span>}
      </div>
      <button type="submit">Submit</button>
    </form>)
  );
}
export default EditPage