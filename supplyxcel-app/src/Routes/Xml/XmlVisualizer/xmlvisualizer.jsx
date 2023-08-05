import React, { useState } from "react";
import "./xmlVisualizerStyles.scss"
function XmlVisualizer() {
  let [xmlInput, setXmlInput] = useState("");

  const apiUrl = "https://www.anyjson.in/api/v2/data/xmltohtml";

  const convertXmlToHtml = () => {
    fetch(apiUrl, {
      method: "POST",
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
          placeholder="Enter XML code here"
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
