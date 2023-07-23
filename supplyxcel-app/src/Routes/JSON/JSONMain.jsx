import React from 'react';
import jsonGen from "./../../Components/Images/JSON_GENERATOR.png";
import jsonVisual from "./../../Components/Images/JSON_VISUALIZER.png"
import { NavLink } from 'react-router-dom'
import './JSON.scss'
function JSONMain() {
  return (
    <>
    <div className="XmlMain-Container">
        <div className="XmlMainContents">
            <div className="xmlMainGenerator">
                <img src={jsonGen}  width="300px" height="150px"  alt="JSON-Generator" />
                <NavLink to='/JSONGenerator'><button className="XmlprimaryBtn">JSON Generator</button></NavLink>
            </div>
            <div className="xmlMainVisualizer">
                 <img src={jsonVisual}  width="300px" height="150px" alt="JSON-Visulaizer" />
                 <NavLink to='/JSONVisualizer'><button className="XmlprimaryBtn">JSON Visulaizer</button></NavLink>
            </div>
        </div>
    </div>
    </>
  )
}

export default JSONMain 