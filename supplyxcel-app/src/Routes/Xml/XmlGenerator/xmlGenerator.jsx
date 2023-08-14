import React, { useState } from "react";
import "./xmlGenerator.scss";
import { PostLogData } from "../../../Utils/Crud";
function XmlGenerator(props) {
  const {uname}=props;
  let [xmlHeader, setXMLHeader] = useState("");
  let [xmlTemplate, setxmlTemplate] = useState("");
  let [inputData, setinputData] = useState("");
  let [xmlFooter, setxmlFooter] = useState("");
  let [xmlOutput, setXmlOutput] = useState("");

//   Functionality of  Genetrate
  const generate = () => {
    let XmlHeader = xmlHeader;
    let XmlTemplate = xmlTemplate;
    let Data = inputData.split(";");
    let XmlFooter = xmlFooter;
    let d = XmlHeader;
    for (var i = 0; i < Data.length - 1; i++) {
      var line = Data[i].trim();
      var lineValue = line.split(",");
      var temp = XmlTemplate;
      for (var j = 0; j < lineValue.length; j++) {
        var fieldName = '$'+(j + 1);
        temp = temp.replaceAll(fieldName, lineValue[j].trim());
      }
      d += temp;
    }
    d += XmlFooter;
    setXmlOutput(d);
    PostLogData(`${uname}" - Generated XML"`)

  };

//   refresh
    const refersh =()=>{
        setXMLHeader('');
        setXmlOutput('');
        setinputData('');
        setxmlTemplate('');
        setxmlFooter('');
    }

  return (
    <div className="XmlGenerator">
      <div className="XmlHeader">
        <p className="xmlTitle">Provide XML Header</p>
        <textarea onChange={(e) => setXMLHeader(e.target.value)} value={xmlHeader}></textarea>
      </div>
      <div className="XmlHeader">
        <p className="xmlTitle">Provide XML Template</p>
        <textarea onChange={(e) => setxmlTemplate(e.target.value)}value={xmlTemplate}></textarea>
      </div>{" "}
      <div className="XmlHeader">
        <p className="xmlTitle">Provide Data Separated By Comma</p>
        <textarea onChange={(e) => setinputData(e.target.value)}value={inputData}></textarea>
      </div>{" "}
      <div className="XmlHeader">
        <p className="xmlTitle">Provide XML Footer</p>
        <textarea onChange={(e) => setxmlFooter(e.target.value)}value={xmlFooter}></textarea>
      </div>
      <div className="xmlGeneratorBtns">
        <button onClick={generate}>Generate</button>
        <button onClick={refersh}> Refresh</button>
      </div>
      <div className="XmlHeader">
        <p className="xmlTitle-Output">Bulk XML</p>
        <textarea id="FinalXml" value={xmlOutput}  style={{height:"150px"}} >{xmlOutput}</textarea>
      </div>
    </div>
  );
}

export default XmlGenerator;
