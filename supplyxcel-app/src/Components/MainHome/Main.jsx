import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./Main.scss";
import Navbar from "../NavBar/Navbar_";
import Sidebar from "../Sidebar/Sidebar";
import XmlMain from "../../Routes/Xml/xmlMain";
import XmlGenerator from "../../Routes/Xml/XmlGenerator/xmlGenerator";
import XmlVisualizer from "../../Routes/Xml/XmlVisualizer/xmlvisualizer";
import JSONGenerator from "../../Routes/JSON/JSONGenerator/JSONGenerator";
import JSONMain from "../../Routes/JSON/JSONMain";
import JsonVisual from "../../Routes/JSON/JSONVIsualizer/jsonVisual";
import ZPL from "../../Routes/ZPL/Zpl";
import Todo from "../../Routes/Todo/Main";
import { toast } from "react-toastify";
import Toast,{ animate } from "../Toast/Toast";
import Clock from "../../Routes/WorldClock/Clock";
import Home from "../../Routes/Home";
import Calci from "../../Routes/Calci/Calci";
function Main(props) {
  const [sideBar, setsideBar] = useState(false);
  const [uname,setUName]=useState('')
  const handleChange = () => {
    setsideBar(!sideBar);
  };
function welcome(){
  const {username}=props
  setUName(username)
 toast(`Welcome ${username}`,animate)
}

useEffect(()=>{
  welcome();
},[])
return (
  <>
      <Navbar handleChange={handleChange} handleLogout={props.handleLogout} />
      <BrowserRouter>
        <div className="Contents">
          <div className={sideBar ? "Main-sidebar" : "closed-Sidebar"}>
            <Sidebar sideBar={sideBar} />
          </div>
          <div className="Container">
            <div className="Container-Contents">
              <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/xmlmain" element={<XmlMain uname={uname} />} />
                <Route path="/xmlGenerator" element={<XmlGenerator uname={uname}  />} />
                <Route path="/xmlVisualizer" element={<XmlVisualizer uname={uname}  />} />
                <Route path="/json" element={<JSONMain uname={uname} />} />
                <Route path="/JSONGenerator" element={<JSONGenerator uname={uname}  />} />
                <Route path="/JSONVisualizer" element={<JsonVisual uname={uname} />} />
                <Route path="/zpl" element={<ZPL uname={uname} />}/>
                <Route path="/notes" element={<Todo uname={uname} />}/>
               <Route path="/clock" element={<Clock uname={uname} />}/>
               <Route path="/calci" element={<Calci uname={uname} />}/> 

              </Routes>
            </div>
            <Toast/>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default Main;
