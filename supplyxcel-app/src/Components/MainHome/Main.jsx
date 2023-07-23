import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./Main.scss";
import Navbar from "../NavBar/NAvbar";
import Sidebar from "../Sidebar/Sidebar";
import XmlMain from "../../Routes/Xml/xmlMain";
import XmlGenerator from "../../Routes/Xml/XmlGenerator/xmlGenerator";
import XmlVisualizer from "../../Routes/Xml/XmlVisualizer/xmlvisualizer";
import JSONGenerator from "../../Routes/JSON/JSONGenerator/JSONGenerator";
import JSONMain from "../../Routes/JSON/JSONMain";
import JsonVisual from "../../Routes/JSON/JSONVIsualizer/jsonVisual";
import ZPL from "../../Routes/ZPL/Zpl";
function Main() {
  const [sideBar, setsideBar] = useState(false);
  const handleChange = () => {
    setsideBar(!sideBar);
  };
  return (
    <>
      <Navbar handleChange={handleChange} />
      <BrowserRouter>
        <div className="Contents">
          <div className={sideBar ? "Main-sidebar" : "closed-Sidebar"}>
            <Sidebar sideBar={sideBar} />
          </div>
          <div className="Container">
            <div className="Container-Contents">
              <Routes>
                <Route path="/" element={<XmlMain />} />
                <Route path="/xmlGenerator" element={<XmlGenerator />} />
                <Route path="/xmlVisualizer" element={<XmlVisualizer />} />
                <Route path="/json" element={<JSONMain />} />
                <Route path="/JSONGenerator" element={<JSONGenerator />} />
                <Route path="/JSONVisualizer" element={<JsonVisual />} />
                <Route path="/zpl" element={<ZPL/>}/>
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default Main;
