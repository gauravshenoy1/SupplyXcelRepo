import React, { useState } from "react";
import "./Zpl.scss"
import { toast } from "react-toastify";
import { animate } from "../../Components/Toast/Toast";


function ZPL() {
  let [xmlInput, setXmlInput] = useState("");

  function convertZPLToLabelary() {
    const zplCode = xmlInput;
    const apiUrl = "http://api.labelary.com/v1/printers/8dpmm/labels/4x6/0/";

    if(zplCode.length < 1){
      toast.error("Please enter the data",animate)
    }
    else {
    fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: zplCode,
    })
      .then((response) => response.arrayBuffer())
      .then((buffer) => {
        const base64Image = arrayBufferToBase64(buffer);
        const html = `<img src="data:image/png;base64,${base64Image}" />`;
        document.getElementById('labelImage').innerHTML = html;
      })
      .catch((error) => {
        console.error("Error converting ZPL to label:", error);
      });
    }
  }

  function arrayBufferToBase64(buffer) {
    let binary = "";
    const bytes = new Uint8Array(buffer);
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary);
  }
  const refresh=()=>{
    setXmlInput("");
    document.getElementById('labelImage').innerHTML = "";

  }
  return (
    <div className="ZplContainer">
      <div className="XML_TEXTAREA">
        <textarea
          id="zplCode"
          rows="10"
          cols="50"
          placeholder="Enter ZPL code here"
          onChange={(e) => setXmlInput(e.target.value)}
          value={xmlInput}
        ></textarea>
      </div>
      <div className="ZPL_btns">
        <button onClick={convertZPLToLabelary}>Visualize</button>
        <button onClick={refresh}>Refresh</button>
      </div>
      <div className="Zpl_img">
        <section id="labelImage">
        </section>
      </div>
    </div>
  );
}

export default ZPL;
