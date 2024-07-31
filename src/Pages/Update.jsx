import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const Update = ({setPop}) => {
    const {id}=useParams();
    const navigate=useNavigate();
    const [data,setData]=useState([]);
    useEffect(()=>{
        axios.get(`https://attendence-mng.vercel.app/student/id/${id}`)
        .then((res)=>{
            setData(res.data)
        })

    },[])
  const token=sessionStorage.getItem('token');
  const [studentId,setStudentId]=useState()
  const [studentName,setStudentName]=useState()
  const [studentRoom,setStudentRoom]=useState()    
  const update=()=>{
    axios.put(`https://attendence-mng.vercel.app/student/update/${id}`,{studentId,studentName,studentRoom},{headers:{'x-token':token}})
    .then((res)=>{
        alert(res.data)
        navigate('/registers')
    })
    .catch((err)=>{
        console.log(err)
    })
  }

  return (
    <>
     <div className='register'>
     <Link to="/registers"><a href='#' style={{color:"blue"}}>Click to See All Records..</a></Link> 
       <h3>--- UPDATE ---</h3>    
        <input type="text" onChange={e=>setStudentId(e.target.value)} defaultValue={data.studentId} placeholder='Enter Student Reg'/><br/>
        <input type="text" onChange={e=>setStudentName(e.target.value)} defaultValue={data.studentName} placeholder='Enter Student Name'/><br/>
        <input type="text" onChange={e=>setStudentRoom(e.target.value)} defaultValue={data.studentRoom} placeholder='Student Room No'/><br/>
        <p className='reg-btn' onClick={update}>Update</p>
      </div>

    </>
   
  )
}

export default Update