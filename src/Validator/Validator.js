


function validateEmail(email) {
    let emailErrors = ''
    if (!email){
        emailErrors = 'Email is required'
    }
    else {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!regex.test(email)){
        emailErrors = 'Invalid email'
    }
    }
    return emailErrors
  }

  function validateName(name){
    let nameErrors = ''
    if (!name){
        nameErrors = 'Email is required'
    }
    return nameErrors
  }

  function validateBirthday(birthday){
    let birthdayErrors = ''
    if (!birthday){
        birthdayErrors = 'Birthday is required'
    }
    return birthdayErrors
  }

  function validatePhone(phone){
    let phoneErrors = ''
    if (!phone){
        phoneErrors = 'Phone is required'
    }
    return phoneErrors
  }
  
  function validateAddress(address){
    let addressErrors = ''
    if (!address){
        addressErrors = 'Address is required'
    }
    return addressErrors
  }
  
  function validateSchoolYear(schoolYear){
    let schoolYearErrors = ''
    if (!schoolYear){
        schoolYearErrors = 'School Year is required'
    }
    return schoolYearErrors
  }
  
  function validateStudentCode(studentCode){
    let studentCodeErrors = ''
    if (!studentCode){
        studentCodeErrors = 'Student Code is required'
    }
    return studentCodeErrors
  }

  function validateCPA(CPA){
    let CPAErrors = ''
    if (!CPA){
        CPAErrors = 'CPA is required'
    }
    return CPAErrors
  }
  function validateGender(gender){
    let genderErrors = ''
    if (!gender){
        genderErrors = 'gender is required'
    }
    return genderErrors
  }
  

export {validateEmail}
export {validateName}
export {validateAddress}
export {validateBirthday}
export {validateCPA}
export {validatePhone}
export {validateSchoolYear}
export {validateStudentCode}
export {validateGender}








