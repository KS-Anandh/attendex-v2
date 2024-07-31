import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Registers = () => {
    const [student,setStudents]=useState([])
    const token=sessionStorage.getItem('token')
    useEffect(()=>{
        axios.get("https://attendence-mng.vercel.app/student",{headers:{'x-token':token}})
        .then((res)=>{
            setStudents(res.data)
        })

    },[])
const Delete=(id,name)=>{
   if(confirm(`Delete ${name}`)){
    axios.delete(`https://attendence-mng.vercel.app/student/delete/${id}`,{headers:{'x-token':token}})
   .then((res)=>{  
    const updated=student.filter(item=>item._id!=id)
    setStudents(updated)
  })
  .catch((err)=>{
    alert(err)
  })
   } 
}
  return (
    <div className='registers'>
        <div className="info">
            <div></div>
           <Link to="/register"> <h3>New Student</h3></Link>
        </div>
        <div className="list">
            <table>
                <tr>
                    <th>Reg-No</th>
                    <th>Name</th>
                    <th>Room</th>
                    <th>Update</th>
                    <th>Delete</th>
                </tr>
                {
                    student.map((item,id)=>{
                        return (
                            <tr key={id}>
                               <td>{item.studentId}</td>
                               <td>{id+1}. {item.studentName}</td>
                               <td>{item.studentRoom}</td>
                               <Link to={`/update/${item._id}`}><td><p>update</p></td></Link>
                               <td><p className='delete' onClick={()=>{Delete(item._id,item.studentName)}}>delete</p></td>
                            </tr>

                        )
                    })
                }
                
            </table>
        </div>
    </div>
  )
}

export default Registers