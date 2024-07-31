import React, { useState } from 'react'
import remove from '../assets/images/remove.png'
import axios from 'axios';
const Popup = ({pop,setPop,setLogin}) => {
       const [loginId,setLoginId]=useState();
       const [loginPass,setLoginPass]=useState();
      const login=()=>{
        axios.post("https://attendence-mng.vercel.app/login/verify",{loginId,loginPass})
         .then((res)=>{
          sessionStorage.setItem("token",(res.data.token));
          alert("Login Success")
          setPop(false);
          data();
         })
         .catch((err)=>{ alert("Invalid login")})
      } 
      const data=()=>{
        const token=sessionStorage.getItem("token")
        axios.get('https://attendence-mng.vercel.app/login/info',{headers:{'x-token':token}})
        .then((res)=>{
  
          setLogin(res.data)
        })
        .catch((err)=>{alert("invalid login")})
      }
       
      
     
  return (

    <div className={`popup ${pop?"active":""}`}>
           <img src={remove} height={25} alt="" onClick={()=>{setPop(false)}}/>
           <h2>Login Form</h2>
           <div>
            <p>User Name</p>
           <input type="text" onChange={event=>setLoginId(event.target.value)} /><br/>
           </div>
           <div>
           <p>Password</p>
           <input type="password" onChange={event=>setLoginPass(event.target.value)}  /><br/>
           </div>
          <button onClick={login}>Login</button>
    </div>
  )
}

export default Popup