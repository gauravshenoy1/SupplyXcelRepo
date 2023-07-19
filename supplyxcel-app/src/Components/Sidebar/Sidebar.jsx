import React from 'react'
import Data from './Sidedata'
import './sidebar.scss'
// import {NavLink} from 'react-router-dom'
function Sidebar({sideBar}) {
  return (
    <>
       <div className={sideBar?"SideContainer":"closedSideContainer"}>
            <ul >
                {Data.map((item,index)=>{
                    return(
                       <div className="Sidebardata-Container" key={index}>
                        <li className="Side-Content">
                            <img src={item.icon} alt={item.name} />
                            <p>{item.name}</p>
                        </li>
                       </div>
                    )
                })}
            </ul>
        </div>
    </>
  )
}

export default Sidebar