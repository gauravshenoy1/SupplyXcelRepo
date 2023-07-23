import React from 'react'
import './xml.scss'
import XmlGen from "./../../Components/Images/XML_GENERATOR.png"
import XmlVisualizer from "./../../Components/Images/XML_VISUALIZER.png"
import { NavLink } from 'react-router-dom'
function xmlMain() {
  return (
    <>
    <div className="XmlMain-Container">
        <div className="XmlMainContents">
            <div className="xmlMainGenerator">
                <img src={XmlGen} width="300px" height="150px" alt="XML-Generator" />
               <NavLink to="/xmlGenerator"><button className="XmlprimaryBtn">XML Generator</button></NavLink>
            </div>
            <div className="xmlMainVisualizer">
                 <img src={XmlVisualizer}  width="300px" height="150px" alt="XML-Visulaizer" />
                <NavLink to='/xmlVisualizer'><button className="XmlprimaryBtn">XML Visulaizer</button></NavLink>
            </div>
        </div>
    </div>
    </>
  )
}

export default xmlMain