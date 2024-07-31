import React from 'react'
import NavBar from '../components/NavBar'
import hostel_logo from '../assets/images/hostel_logo.jpg'
import application from '../assets/images/application.pdf'
import axios from 'axios'
const Home = ({setPop,login}) => {

 const active=()=>{
  axios.post("https://attendence-mng.vercel.app/attendence/active")
  .then((res)=>{
    alert(res.data)
  })
  .catch((err)=>{
    console.log(err)
  })
  

 }

  return (
    <>
     <div className='home'>
        <img src={hostel_logo} alt=""/>
        {login.user_status==="admin"?<p className='app-btn' onClick={active}>Allow Attendence</p>:""}
        <h3>  BC BOYS HOSTEL KUPPAM </h3>
        <div className="about">
          <p><span className='start-p'>Government Hostels</span> in Ap provide affordable accommodation for students, working professionals, and travelers. They are managed by state governments, educational institutions, or other government agencies. Facilities generally include dormitories or private rooms, common dining halls, recreational areas, study spaces, and Wi-Fi. The application process varies, with students applying through their educational institutions and others through respective government portals.</p>
        </div>
        <p className='app-btn'><a href={application} download={"BC HOSTEL JOINING APPLICATION"}>Appication Form Download</a></p>
    </div>
    </>
   
  )
}

export default Home