import React, { useState } from "react";
import "./xmlGenerator.scss";
import { PostLogData } from "../../../Utils/Crud";
function XmlGenerator(props) {
  const {uname}=props;
  let headerPreText='<orders>';
  let dataTemplate=' \n <order>  \n   <order_id>1001</order_id>  \n   <customer>  \n     <name>$1</name>  \n     <address>$2</address>  \n     <pincode>$3</pincode>  \n   </customer>  \n   <order_date>2023-08-06</order_date>  \n   <order_lines>  \n     <order_line>  \n       <product_id>P001</product_id>  \n       <product_name>Widget A</product_name>  \n       <quantity>2</quantity>  \n       <unit_price>10.99</unit_price>  \n     </order_line>  \n     <order_line>  \n       <product_id>P002</product_id>  \n       <product_name>Gizmo B</product_name>  \n       <quantity>1</quantity>  \n       <unit_price>24.99</unit_price>  \n     </order_line>  \n   </order_lines>  \n </order>';
  let footerPreText='\n</orders>';
  let dataPreText='\nGaurav,Kamakshipalya Bangalore,560079; \nAkhilesh,Chikkamagalur,560888; \nRamesh,Mangalore,576767;';
  let [xmlHeader, setXMLHeader] = useState(headerPreText);
  let [xmlTemplate, setxmlTemplate] = useState(dataTemplate);
  let [inputData, setinputData] = useState(dataPreText);
  let [xmlFooter, setxmlFooter] = useState(footerPreText);
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
