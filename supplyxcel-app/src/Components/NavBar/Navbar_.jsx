import React, { useState } from 'react'
import './nav.scss';
import Logo from '../Images/Icons/favicon.png';
import Menu from '../Images/Icons/menu.png';
import Man from '../Images/Icons/man.png';
import { connect } from "react-redux";
import { PostLogData } from '../../Utils/Crud';

const mapStateToProps=(state)=>{
  const {user:{data}}=state
  console.log(data)
  return{
    user:data
  }
}
function Navbar(props) {
  const{handleChange,user:{user},handleLogout}=props
  const [handleLogut,SethandleLogut]=useState(false)
  const handleLOut=()=>{
    PostLogData(`"USER LOGGED OUT - "${user}`)
    handleLogout()
  }
  return (
    <>
    <div className='MainNav-container'>
    <img src={Menu} width="40px" onClick={handleChange} alt="Menu" />
      <div className='Nav-Heading'>
        <h2 className='Nav-HeadFirst'>Supply</h2>
          <img src={Logo} alt="Logo" width="30px"  />
         <h2 className='Nav-HeadSecond'>Xcel</h2>
      </div>
      <div className='Nav-UserDetail' onClick={()=>SethandleLogut(!handleLogut)}>
        <img src={Man} alt="UserImg" width="30px" />
          <p >{user}</p>
      </div>
          <p className={handleLogut?"User-logout":"User"} onClick={()=>handleLOut()}>logout</p>
    </div>
    </>
  )
}

export default connect(mapStateToProps,null)(Navbar)