import React, { useEffect, useState } from 'react'
import moment from 'moment'
import axios from 'axios'
const List = () => {
  const [date,setdate]=useState(moment(Date()).format("DD-MM-yyyy"))
  const [Alist, setAList] = useState([])
  const [Plist, setPList] = useState([])
  const [P, S] = useState(false)

  
  useEffect(() => {
    axios.get(`https://attendence-mng.vercel.app/attendence/list/absent/${date}`)
      .then((res) => {
        setAList(res.data)
      })
      .catch((err) => { console.log(err) })
      axios.get(`https://attendence-mng.vercel.app/attendence/list/${date}`)
      .then((res) => {
        setPList(res.data)

      })
      .catch((err) => { console.log(err) 
        alert(`${date} data is not present`)
      })
  }, [P])
  
  return (
    <div className='attend-list'>
      <div className="filter">
        <div className='select_date'>
          <input type="date" name='begin' min="19-01-2024" onChange={(e) => {
            setdate(e.target.value)
          }} />
          <input type="submit" onClick={()=>{
             const Date=date.slice(8,10)+"-"+date.slice(5,7)+"-"+date.slice(0,4)
             setdate(Date)
             S(e=>!e) 
          }}/>
        </div>
        <div className="date">
          <p style={{ fontSize: "15px" }}>{date} / {moment(Date()).format("hh:mm A")}</p>
        </div>
      </div>
      <div className='data'><p>Present : {Alist.length}</p><p>Absent : {Plist.length}</p></div>
      <div className='attend-table'>
      <div className="absent">
        <center>-- Absentees --</center>

        <table>
          <tr>
            <th>NO</th>
            <th>Reg.ID</th>
            <th>Name</th>
            <th>Room</th>
          </tr>
          {
            Alist.map((item,id) => {
              return (
                <tr key={id}>
                  <td>{id+1}.</td>
                  <td>{item.studentId}</td>
                  <td> {item.studentName}</td>
                  <td>{item.studentRoom}</td>
                </tr>
              )
            })
          }
        </table>
      </div>
      <div className="attend">
        <center>-- Presentees --</center>
        <tr>
        <th>NO</th>
          <th>Reg.ID</th>
          <th>Name</th>
          <th>Room</th>
        </tr>
        {
            Plist.map((item,id) => {
              return (
                <tr key={id}>
                   <td>{id+1}.</td>
                  <td>{item.studentId}</td>
                  <td>{item.studentName}</td>
                  <td>{item.studentRoom}</td>
                </tr>
              )
            })
          }
      </div>
      </div>
    </div>
  )
}

export default List