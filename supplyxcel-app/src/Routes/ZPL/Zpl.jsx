import React, { useState } from "react";
import "./Zpl.scss"
import { toast } from "react-toastify";
import { animate } from "../../Components/Toast/Toast";
import { PostLogData } from "../../Utils/Crud";


function ZPL(props) {
  const{uname}=props
  let preTextZpl = '^XA\n^FX Top section with logo, name and address.\n^CF0,60\n^FO50,50^GB100,100,100^FS\n^FO75,75^FR^GB100,100,100^FS\n^FO93,93^GB40,40,40^FS\n^FO220,50^FDJain University, India.^FS\n^CF0,30\n^FO220,115^FDJC Road^FS\n^FO220,155^FDBangalore^FS\n^FO220,195^FDKarnataka India^FS\n^FO50,250^GB700,3,3^FS\n\n^FX Second section with recipient address and permit information.\n^CFA,30\n^FO50,300^FDGaurav Shenoy^FS\n^FO50,340^FD53/B Kamakshipalya^FS\n^FO50,380^FDBangalore 560079^FS\n^FO50,420^FDKarnataka India^FS\n^CFA,15\n^FO600,300^GB150,150,3^FS\n^FO638,340^FDPermit^FS\n^FO638,390^FD123456^FS\n^FO50,500^GB700,3,3^FS\n\n^FX Third section with barcode.\n^BY5,2,270\n^FO100,550^BC^FD12345678^FS\n\n^FX Fourth section (the two boxes on the bottom).\n^FO50,900^GB700,250,3^FS\n^FO400,900^GB3,250,3^FS\n^CF0,40\n^FO50,960^FDMARKS CARD^FS\n^FO50,1010^2021-23^FS\n\n^CF0,190\n^FO470,955^FDMCA^FS\n\n^XZ';

  let [xmlInput, setXmlInput] = useState(preTextZpl);

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
      PostLogData(`${uname}" - Generated Zpl"`)
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
