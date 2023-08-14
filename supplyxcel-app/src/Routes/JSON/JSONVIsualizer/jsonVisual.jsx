import React, { useState } from "react";
import "./jsonVisualizer.scss"
import { toast } from "react-toastify";
import { animate } from "../../../Components/Toast/Toast";
import { PostLogData } from "../../../Utils/Crud";

function JsonVisual(props) {
  const{uname}=props
  let [JsonInput, setJsonInput] = useState(""); 
  const apiUrl = "https://www.anyjson.in/api/v2/data/jsontohtml";

  const convertJsonToHtml = () => {
    if(JsonInput.length < 1){
      toast.error("Please enter the data",animate)
    }
    else {
    fetch(apiUrl, {
      method: "POST",
     // mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JsonInput,
    })
      .then((Response) => Response.text())
      .then((data) => {
        PostLogData(`${uname} " - Requested JSON VISUALIZER"`)
        document.getElementById('output').innerHTML = data;
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    }
  };

  const execute =()=>{
    convertJsonToHtml();
 }
  const Refresh = () => {
    setJsonInput("");
    document.getElementById('output').innerHTML = "";
  };
  return (
    <>
      <div className="Json_visualizer">
        <div>
          <textarea placeholder="Provide JSON here..." value={JsonInput} onChange={(e)=>setJsonInput(e.target.value)}></textarea>
        </div>
        <div className="Json_visualize_buttons">
          <button onClick={execute}>Visualize</button>
          <button onClick={Refresh}>Refresh</button>
        </div>
       <div className="Table-container">
         <table id="output" >
        </table>
      </div>
      </div>
    </>
  );
}

export default JsonVisual;
