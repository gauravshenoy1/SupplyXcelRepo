import React, { useState } from 'react'
import Navbar from '../NavBar/NAvbar';
import Sidebar from '../Sidebar/Sidebar';
import './Main.scss'
import XmlGenerator from '../../Routes/Xml/XmlGenerator/xmlGenerator';
// import XmlMain from '../../Routes/Xml/xmlMain'
function Main() {
  const [sideBar,setsideBar]=useState(false);
  const handleChange=()=>{
    setsideBar(!sideBar)
  }
  return (
    <>
    <Navbar 
    handleChange={handleChange}
    />
    <div className='Contents'>
        <div className={sideBar?"Main-sidebar":"closed-Sidebar"}>
            <Sidebar
            sideBar={sideBar}
            />
        </div>
        <div className="Container">
        <div className='Container-Contents'>
          {/* <XmlMain/> */}
          <XmlGenerator/>
        </div>
        </div>
    </div>
    </>
  )
}

export default Main