import React, { useState } from 'react'
import NavBar from './components/NavBar'
import Home from './Pages/Home'
import Register from './Pages/Register'
import Attendence from './Pages/Attendence'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Popup from './Pages/Popup'
import Registers from './Pages/Registers'
import List from './Pages/List'
import Update from './Pages/Update'
import Access from './components/Access'

const App = () => {
  const [nav,setNav]=useState(1);
  const [pop,setPop]=useState(false);
  const [login,setLogin]=useState("room");
  return (
    <div >
      <BrowserRouter>
      <NavBar nav={nav} setNav={setNav}  pop={pop} login={login} setPop={setPop} setLogin={setLogin}/>
      <div className={`${pop?"app":""}`}>
      <Routes>
        <Route path='/' element={<Home setPop={setPop} login={login}/>}/>
        <Route path="/registers/" element={<Registers setPop={setPop}/>}/>
        {login.user_status==="room"?<Route path="/attendence/" element={< Attendence setPop={setPop} login={login}/>}/>:<Route path="/attendence/" element={<Access data="Login Required"/>}/>}
        {login.user_status==="admin"?<Route path="/attendence/" element={< List setPop={setPop} login={login}/>}/>:<Route path="/attendence/" element={<Access data="Login Required"/>}/>}
        {login.user_status==="admin"?<Route path="/register/" element={<Register setPop={setPop}/>}/>:<Route path="/register/" element={<Access data="Only Admin"/>}/>}
        {login.user_status==="admin"?<Route path="/update/:id" element={<Update/>}/>:""}
        <Route path="/list/" element={<List/>}/>
      </Routes>
      </div>
      </BrowserRouter>
      
    </div>
  )
}

export default App
