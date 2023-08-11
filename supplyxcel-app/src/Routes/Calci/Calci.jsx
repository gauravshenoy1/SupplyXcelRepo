import React, { useState } from "react";
import './Calci.scss'
import { json } from "react-router-dom";
function Calci() {
  const [input1, setInput1] = useState(0);
  const [input2, setInput2] = useState(0);
  const [output, setOutput] = useState(0);

 const  calculate = () => { setOutput(JSON.parse(input1)+JSON.parse(input2))};
  return (
    <>
      <section className="Calci-Wrapper">
        <article className="calciContainerWrapper-1">
          <div className="calciContainer-1">
            <input type="text" onChange={(e) => setInput1(e.target.value)} />
            <input type="text" onChange={(e) => setInput2(e.target.value)} />
            <input type="button" value="Calculate" onClick={()=>calculate()} />
            <p>{output}</p>
          </div>
        </article>
      </section>
    </>
  );
}

export default Calci;
