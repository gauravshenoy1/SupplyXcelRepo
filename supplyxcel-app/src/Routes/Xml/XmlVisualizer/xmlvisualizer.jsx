import React, { useState } from "react";
import "./xmlVisualizerStyles.scss"
import { toast } from "react-toastify";
import { animate } from "../../../Components/Toast/Toast";
import { PostLogData } from "../../../Utils/Crud";
function XmlVisualizer(props) {
  const{uname}=props
let preTextXml = "<orders>\n  <order>\n    <order_id>1001</order_id>\n    <customer>\n      <name>John Doe</name>\n      <address>123 Main Street</address>\n      <pincode>12345</pincode>\n    </customer>\n    <order_date>2023-08-06</order_date>\n    <order_lines>\n      <order_line>\n        <product_id>P001</product_id>\n        <product_name>Widget A</product_name>\n        <quantity>2</quantity>\n        <unit_price>10.99</unit_price>\n      </order_line>\n      <order_line>\n        <product_id>P002</product_id>\n        <product_name>Gizmo B</product_name>\n        <quantity>1</quantity>\n        <unit_price>24.99</unit_price>\n      </order_line>\n    </order_lines>\n  </order>\n  <order>\n    <order_id>1002</order_id>\n    <customer>\n      <name>Jane Smith</name>\n      <address>456 Elm Street</address>\n      <pincode>67890</pincode>\n    </customer>\n    <order_date>2023-08-06</order_date>\n    <order_lines>\n      <order_line>\n        <product_id>P003</product_id>\n        <product_name>Thingamajig C</product_name>\n        <quantity>3</quantity>\n        <unit_price>8.49</unit_price>\n      </order_line>\n    </order_lines>\n  </order>\n  <order>\n    <order_id>1003</order_id>\n    <customer>\n      <name>Robert Johnson</name>\n      <address>789 Oak Avenue</address>\n      <pincode>54321</pincode>\n    </customer>\n    <order_date>2023-08-06</order_date>\n    <order_lines>\n      <order_line>\n        <product_id>P002</product_id>\n        <product_name>Gizmo B</product_name>\n        <quantity>2</quantity>\n        <unit_price>24.99</unit_price>\n      </order_line>\n      <order_line>\n        <product_id>P004</product_id>\n        <product_name>Doodad D</product_name>\n        <quantity>1</quantity>\n        <unit_price>15.75</unit_price>\n      </order_line>\n    </order_lines>\n  </order>\n  <order>\n    <order_id>1004</order_id>\n    <customer>\n      <name>Emily White</name>\n      <address>234 Pine Lane</address>\n      <pincode>98765</pincode>\n    </customer>\n    <order_date>2023-08-06</order_date>\n    <order_lines>\n      <order_line>\n        <product_id>P001</product_id>\n        <product_name>Widget A</product_name>\n        <quantity>1</quantity>\n        <unit_price>10.99</unit_price>\n      </order_line>\n      <order_line>\n        <product_id>P005</product_id>\n        <product_name>Sprocket E</product_name>\n        <quantity>4</quantity>\n        <unit_price>5.99</unit_price>\n      </order_line>\n    </order_lines>\n  </order>\n  <order>\n    <order_id>1005</order_id>\n    <customer>\n      <name>Michael Brown</name>\n      <address>567 Maple Drive</address>\n      <pincode>23456</pincode>\n    </customer>\n    <order_date>2023-08-06</order_date>\n    <order_lines>\n      <order_line>\n        <product_id>P006</product_id>\n        <product_name>Gadget F</product_name>\n        <quantity>2</quantity>\n        <unit_price>19.95</unit_price>\n      </order_line>\n    </order_lines>\n  </order>\n</orders>";

  let [xmlInput, setXmlInput] = useState(preTextXml);

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
