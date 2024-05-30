import React, { useState } from 'react'

const PatReg = () =>{  
    const [fullName,setFullName] = useState('');
    const [contactNo,setContactNo] = useState('');
    const nameHandleChange=(e)=>{
        setFullName(e.target.value)
    }
    const contactHandleChange=(e)=>{
        setContactNo(e.target.value);
    }
    const submitMtd=(e)=>{
        e.preventDefault();
        if(!contactNo){
            alert("Please enter contact No.");
            return true;
        }
        if(!fullName){
            alert("Please enter Full Name.");
            return true;
        }
        console.log('Full Name :' +fullName);
        console.log('Contact No :' +contactNo);
    }
    
    return (
    <div>
      <div><h1>Patient Registration</h1></div>
      <div>
        <input type='text' placeholder='Full Name' name='fullName' value={fullName} onChange={nameHandleChange}></input><br/><br/>
        <input type='text' placeholder='Full Name' name='contactNo' value={contactNo} onChange={contactHandleChange}></input><br/><br/>
        <button type='button' onClick={submitMtd}>Submit</button><br/><br/>
      </div>
    </div>
  )
}


export default PatReg;
