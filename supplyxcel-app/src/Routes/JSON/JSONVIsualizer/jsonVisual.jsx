import React, { useState } from "react";
import "./jsonVisualizer.scss"
import { convertjsonToHtml } from "../../../Utils/jsonVisual";
function JsonVisual() {
  const [JsonInput, setJsonInput] = useState("");

  const jsonConvert = () => {
    try{
      const visual = convertjsonToHtml(JsonInput)
       visual.then(res=>{
        document.getElementById('output').innerHTML = res;
      })
    }catch(error){
      console.log(error.message)
    }
  };

  const Refresh = () => {
    setJsonInput("");
    document.getElementById('output').innerHTML = "";
  };
  return (
    <>
      <div className="Json_visualizer">
        <div>
          <textarea value={JsonInput} onChange={(e)=>setJsonInput(e.target.value)}></textarea>
        </div>
        <div className="Json_visualize_buttons">
          <button onClick={jsonConvert}>Visualize</button>
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
