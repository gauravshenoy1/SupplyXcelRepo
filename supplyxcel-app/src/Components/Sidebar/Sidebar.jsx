import React from "react";
import Data from "./Sidedata";
import "./sidebar.scss";
import { NavLink } from "react-router-dom";
import { PostLogData } from "../../Utils/Crud";
function Sidebar(props) {
  const{sideBar}=props
  return (
    <>
      <div className={sideBar ? "SideContainer" : "closedSideContainer"}>
        <ul>
          {Data.map((item, index) => {  
            return (
              <NavLink to={item.path} key={index} >
                <div className="Sidebardata-Container">
                  <li className="Side-Content" >
                    <img src={item.icon} alt={item.name} />
                    <p>{item.name}</p>
                  </li>
                </div>
              </NavLink>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
