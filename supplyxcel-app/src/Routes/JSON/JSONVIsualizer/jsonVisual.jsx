import React, { useState } from "react";
import "./jsonVisualizer.scss"
import { toast } from "react-toastify";
import { animate } from "../../../Components/Toast/Toast";
import { PostLogData } from "../../../Utils/Crud";

function JsonVisual(props) {
  const{uname}=props
  let preTextJson = '{ \n  "orders": [ \n    { \n      "order_id": "1001", \n      "customer": { \n        "name": "John Doe", \n        "address": "123 Main Street", \n        "pincode": "12345" \n      }, \n      "order_date": "2023-08-06", \n      "order_lines": [ \n        { \n          "product_id": "P001", \n          "product_name": "Widget A", \n          "quantity": 2, \n          "unit_price": 10.99 \n        }, \n        { \n          "product_id": "P002", \n          "product_name": "Gizmo B", \n          "quantity": 1, \n          "unit_price": 24.99 \n        } \n      ] \n    }, \n    { \n      "order_id": "1002", \n      "customer": { \n        "name": "Jane Smith", \n        "address": "456 Elm Street", \n        "pincode": "67890" \n      }, \n      "order_date": "2023-08-06", \n      "order_lines": [ \n        { \n          "product_id": "P003", \n          "product_name": "Thingamajig C", \n          "quantity": 3, \n          "unit_price": 8.49 \n        } \n      ] \n    }, \n    { \n      "order_id": "1003", \n      "customer": { \n        "name": "Robert Johnson", \n        "address": "789 Oak Avenue", \n        "pincode": "54321" \n      }, \n      "order_date": "2023-08-06", \n      "order_lines": [ \n        { \n          "product_id": "P002", \n          "product_name": "Gizmo B", \n          "quantity": 2, \n          "unit_price": 24.99 \n        }, \n        { \n          "product_id": "P004", \n          "product_name": "Doodad D", \n          "quantity": 1, \n          "unit_price": 15.75 \n        } \n      ] \n    }, \n    { \n      "order_id": "1004", \n      "customer": { \n        "name": "Emily White", \n        "address": "234 Pine Lane", \n        "pincode": "98765" \n      }, \n      "order_date": "2023-08-06", \n      "order_lines": [ \n        { \n          "product_id": "P001", \n          "product_name": "Widget A", \n          "quantity": 1, \n          "unit_price": 10.99 \n        }, \n        { \n          "product_id": "P005", \n          "product_name": "Sprocket E", \n          "quantity": 4, \n          "unit_price": 5.99 \n        } \n      ] \n    }, \n    { \n      "order_id": "1005", \n      "customer": { \n        "name": "Michael Brown", \n        "address": "567 Maple Drive", \n        "pincode": "23456" \n      }, \n      "order_date": "2023-08-06", \n      "order_lines": [ \n        { \n          "product_id": "P006", \n          "product_name": "Gadget F", \n          "quantity": 2, \n          "unit_price": 19.95 \n        } \n      ] \n    } \n  ] \n}';
  let [JsonInput, setJsonInput] = useState(preTextJson); 
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
