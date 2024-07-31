import React from 'react'
import govt_logo from '../assets/images/download.png'
import { Link } from 'react-router-dom'
import Popup from '../Pages/Popup'
import logo from '../assets/images/logo.png'
const NavBar = ({nav,setNav,pop,setPop,setLogin,login}) => {
  return (
    <div className='navbar'>
        <div className="header">
            <img src={logo} alt="Hostel_logo" />
            <div className="info">
                <h2>GOVT BC BOYS CLG HOSTEL KUPPAM</h2>
             <p>Near NTR Stadium, Vaddipalli, Kuppam, 517425.</p>
            </div>
        </div>
        <Popup pop={pop} setPop={setPop} setLogin={setLogin} />
        <div className="navigation">
                <ul>{
                  }
                {nav==1?<Link to="/"><li style={{background:" linear-gradient(-90deg, rgb(80, 149, 239) 10%, rgb(3, 226, 88) 80%)"}}>Home</li></Link>:<Link to="/"><li onClick={()=>{setNav(1)}}>Home</li></Link>}   
                {nav==3?<Link to="/"><li style={{background:" linear-gradient(-90deg, rgb(80, 149, 239) 10%, rgb(3, 206, 58) 80%)"}}>Attendence</li></Link>:<Link to="/attendence"><li onClick={()=>{setNav(3)}}>Attendence</li></Link>}
                {nav==2?<Link to="/"><li style={{background:" linear-gradient(-90deg, rgb(80, 149, 239) 10%, rgb(3, 226, 88) 80%)"}}>Register</li></Link>:<Link to="/register"><li onClick={()=>{setNav(2)}}>Register</li></Link>}
                </ul>
                <p onClick={()=>{setPop(true)}}>Login</p>
        </div>
    </div>
  )
}

export default NavBar