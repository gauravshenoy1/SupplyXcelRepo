import React, { useState } from "react";
import "./xmlVisualizerStyles.scss"
import { toast } from "react-toastify";
import { animate } from "../../../Components/Toast/Toast";
import { PostLogData } from "../../../Utils/Crud";
function XmlVisualizer(props) {
  const{uname}=props

  let [xmlInput, setXmlInput] = useState("");

  const apiUrl = "https://www.anyjson.in/api/v2/data/xmltohtml";

  const convertXmlToHtml = () => {
    if(xmlInput.length < 1){
      toast.error("Please enter the data",animate)
    }
    else {
    fetch(apiUrl, {
      method: "POST",
      //mode: "no-cors",
      headers: {
        "Content-Type": "text/html",
      },
      body: xmlInput,
    })
      .then((Response) => Response.text())
      .then((data) => {
          document.querySelector('#table').innerHTML = data;
      })
      .catch((error) => {
        console.error("Error:", error);
      });
      PostLogData(`${uname}" - Requested To Visualize XML"`)
    }
  };
 const execute =()=>{
    convertXmlToHtml();
 }
  const Refresh = () => {
    setXmlInput("");
    document.querySelector('#table').innerHTML = "";
  };
  return (
    <>
      <div className="XML_TEXTAREA">
        <textarea
          id="zplCode"
          rows="10"
          cols="50"
          placeholder="Provide XML here..."
          onChange={(e) => setXmlInput(e.target.value)}
          value={xmlInput}
        ></textarea>
        <div className="XML_TEXTAREA_buttons">
        <button onClick={execute}>Visualize</button>
        <button onClick={Refresh}>Refresh</button>
      </div>
      </div>
        <section  className="XML_TEXTAREA_Output" id="table"></section>
    </>
  );
}

export default XmlVisualizer;
