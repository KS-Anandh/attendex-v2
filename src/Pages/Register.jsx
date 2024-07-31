import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Register = ({setPop}) => {
  const token=sessionStorage.getItem('token');
  const navigate=useNavigate();
  const [studentId,setStudentId]=useState(null)
  const [studentName,setStudentName]=useState(null)
  const [studentRoom,setStudentRoom]=useState(null)
  const register=()=>{
    axios.post("https://attendence-mng.vercel.app/student",{studentId,studentName,studentRoom},{headers:{'x-token':token}})
    .then((res)=>{
      alert(res.data)
      navigate("/registers")
    })
    .catch((err)=>{
      alert('Enter Proper data')
    })
  }
          
  return (
    <>
     <div className='register'>
    <Link to="/registers"><a href='#' style={{color:"blue"}}>Click to See All Records..</a></Link> 
       <h3>--- Registration ---</h3>    
        <input type="text" onChange={e=>setStudentId(e.target.value)} placeholder='Enter Student Reg'/><br/>
        <input type="text" onChange={e=>setStudentName(e.target.value)}placeholder='Enter Student Name'/><br/>
        <input type="text" onChange={e=>setStudentRoom(e.target.value)}placeholder='Student Room No'/><br/>
        <p className='reg-btn' onClick={register}>Add in Regsiter</p>
      </div>

    </>
   
  )
}

export default Register