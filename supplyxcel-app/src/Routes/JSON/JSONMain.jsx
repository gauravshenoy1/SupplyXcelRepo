import React from 'react';
import jsonGen from "./../../Components/Images/JSON_GENERATOR.png";
import jsonVisual from "./../../Components/Images/JSON_VISUALIZER.png"
import { NavLink } from 'react-router-dom'
import './JSON.scss'
function JSONMain() {
  return (
    <>
    <div className="JsonMain-Container">
        <div className="JsonMainContents">
            <div className="JsonMainGenerator">
                <img src={jsonGen}  width="500px" height="150px"  alt="JSON-Generator" />
                <NavLink to='/JSONGenerator'><button className="JsonPrimaryBtn">JSON Generator</button></NavLink>
            </div>
            <div className="JsonMainVisualizer">
                 <img src={jsonVisual}  width="500px" height="150px" alt="JSON-Visulaizer" />
                 <NavLink to='/JSONVisualizer'><button className="JsonPrimaryBtn">JSON Visulaizer</button></NavLink>
            </div>
        </div>
    </div>
    </>
  )
}

export default JSONMain 