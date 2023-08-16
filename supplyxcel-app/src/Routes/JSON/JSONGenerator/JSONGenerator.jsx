import React, { useState } from "react";
import "./JSONGenerator.scss";
import { PostLogData } from "../../../Utils/Crud";



function JSONGenerator(props) {
 const{uname}=props
 let headerPreText='{  \n"orders": [';
 let dataTemplate='\n    { \n      "order_id": "1001", \n      "customer": { \n        "name": "$1", \n        "address": "$2", \n        "pincode": "$3" \n      }, \n      "order_date": "2023-08-06", \n      "order_lines": [ \n        { \n          "product_id": "P001", \n          "product_name": "Widget A", \n          "quantity": 2, \n          "unit_price": 10.99 \n        }, \n        { \n          "product_id": "P002", \n          "product_name": "Gizmo B", \n          "quantity": 1, \n          "unit_price": 24.99 \n        } \n      ] \n    },';
 let footerPreText='\n  ]\n}';
 let dataPreText='\nGaurav,Kamakshipalya Bangalore,560079; \nAkhilesh,Chikkamagalur,560888; \nRamesh,Mangalore,576767;'; 
  let [JSONHeader, setJSONHeader] = useState(headerPreText);
  let [JSONTemplate, setJSONTemplate] = useState(dataTemplate);
  let [inputData, setinputData] = useState(dataPreText);
  let [JSONFooter, setJSONFooter] = useState(footerPreText);
  let [JSONOutput, setJSONOutput] = useState("");

//   Functionality of  Genetrate`
  const generate = () => {
    PostLogData(`${uname} " - Requested to Generate JSON "`)
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
