import React from 'react'
import './nav.scss';
import Logo from '../Images/Icons/favicon.png';
import Menu from '../Images/Icons/menu.png';
import Man from '../Images/Icons/man.png'
function Navbar({handleChange}) {
  return (
    <>
    <div className='MainNav-container'>
    <img src={Menu} width="40px" onClick={handleChange} alt="Menu" />
      <div className='Nav-Heading'>
        <h2 className='Nav-HeadFirst'>Supply</h2>
          <img src={Logo} alt="Logo" width="30px"  />
         <h2 className='Nav-HeadSecond'>Xcel</h2>
      </div>
      <div className='Nav-UserDetail'>
        <img src={Man} alt="UserImg" width="30px" />
          <p>Gaurav Shenoy</p>
      </div>
    </div>
    </>
  )
}

export default Navbar