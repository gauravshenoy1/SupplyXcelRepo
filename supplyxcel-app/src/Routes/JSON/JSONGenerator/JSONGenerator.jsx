import React, { useState } from "react";
import "./JSONGenerator.scss";
import { PostLogData } from "../../../Utils/Crud";



function JSONGenerator(props) {
 const{uname}=props
  let [JSONHeader, setJSONHeader] = useState("");
  let [JSONTemplate, setJSONTemplate] = useState("");
  let [inputData, setinputData] = useState("");
  let [JSONFooter, setJSONFooter] = useState("");
  let [JSONOutput, setJSONOutput] = useState("");

//   Functionality of  Genetrate`
  const generate = () => {
    PostLogData(`${uname} "Requested to Generate JSON "`)
    let jsonHeader = JSONHeader;
    let jsonTemplate = JSONTemplate;
    let Data = inputData.split(";");
    let jsonFooter = JSONFooter;
    let d = jsonHeader;
    for (var i = 0; i < Data.length - 1; i++) {
      var line = Data[i].trim();
      var lineValue = line.split(",");
      var temp = jsonTemplate;
      for (var j = 0; j < lineValue.length; j++) {
        var fieldName = '$'+(j + 1);
        temp = temp.replaceAll(fieldName, lineValue[j].trim());
      }
      d += temp;
    }
    d += jsonFooter;
    setJSONOutput(d);
  };

//   refresh
    const refersh =()=>{
        setJSONHeader('');
        setJSONOutput('');
        setinputData('');
        setJSONTemplate('');
        setJSONFooter('');
    }

  return (
    <div className="XmlGenerator">
      <div className="XmlHeader">
        <p className="xmlTitle">Provide JSON Header</p>
        <textarea onChange={(e) => setJSONHeader(e.target.value)} value={JSONHeader}></textarea>
      </div>
      <div className="XmlHeader">
        <p className="xmlTitle">Provide JSON Template Here</p>
        <textarea onChange={(e) => setJSONTemplate(e.target.value)}value={JSONTemplate}></textarea>
      </div>{" "}
      <div className="XmlHeader">
        <p className="xmlTitle">Input Data Seperated By Comma</p>
        <textarea onChange={(e) => setinputData(e.target.value)}value={inputData}></textarea>
      </div>{" "}
      <div className="XmlHeader">
        <p className="xmlTitle">Provide JSON Footer</p>
        <textarea onChange={(e) => setJSONFooter(e.target.value)}value={JSONFooter}></textarea>
      </div>
      <div className="xmlGeneratorBtns">
        <button onClick={generate}>Generate</button>
        <button onClick={refersh}> Refresh</button>
      </div>
      <div className="XmlHeader">
        <p className="xmlTitle-Output">JSON Output</p>
        <textarea id="FinalXml" value={JSONOutput}  style={{height:"150px"}} >{JSONOutput}</textarea>
      </div>
    </div>
  );
}

export default JSONGenerator;
