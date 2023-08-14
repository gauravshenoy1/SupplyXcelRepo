import React, { useState } from "react";
import './Calci.scss';

function Calci() {
  const [containerVolume, setContainerVolume] = useState("");
  const [allocatableQuantity, setAllocatableQuantity] = useState("");
  const [freightCost, setFreightCost] = useState("");

  const calculateContainerVolume = () => {
    const length = parseFloat(document.getElementById('length').value);
    const width = parseFloat(document.getElementById('width').value);
    const height = parseFloat(document.getElementById('height').value);
    const quantity = parseFloat(document.getElementById('quantity').value);

    const calculatedContainerVolume = length * width * height * quantity;
    setContainerVolume(`Container Volume: ${calculatedContainerVolume}`);
  }

  const calculateAllocatableQuantity = () => {
    const on_hand = parseFloat(document.getElementById('on_hand').value);
    const unallocatable = parseFloat(document.getElementById('unallocatable').value);

    const calculatedAllocatableQuantity = on_hand - unallocatable;
    setAllocatableQuantity(`Allocatable Quantity: ${calculatedAllocatableQuantity}`);
  }

  const calculateFreightCost = () => {
    const total_km = parseFloat(document.getElementById('total_km').value);
    const cost_per_km = parseFloat(document.getElementById('cost_per_km').value);
    const additional_expense = parseFloat(document.getElementById('additional_expense').value);

    const calculatedFreightCost = (total_km * cost_per_km) + additional_expense;
    setFreightCost(`Freight Cost: ${calculatedFreightCost}`);
  }

  return (
    <div className="calculator">
      <div className="calculation-container">
        <h2>Container Volume</h2>
        <label htmlFor="length">Length:</label>
        <input type="number" id="length" defaultValue="0" />
        <label htmlFor="width">Width:</label>
        <input type="number" id="width" defaultValue="0" />
        <label htmlFor="height">Height:</label>
        <input type="number" id="height" defaultValue="0" />
        <label htmlFor="quantity">Quantity:</label>
        <input type="number" id="quantity" defaultValue="0" />
        <button onClick={calculateContainerVolume}>Calculate</button>
        <div className="result" id="containerVolume">{containerVolume}</div>
      </div>
      <div className="calculation-container">
        <h2>Allocatable Quantity</h2>
        <label htmlFor="on_hand">On Hand:</label>
        <input type="number" id="on_hand" defaultValue="0" />
        <label htmlFor="unallocatable">Unallocatable:</label>
        <input type="number" id="unallocatable" defaultValue="0" />
        <button onClick={calculateAllocatableQuantity}>Calculate</button>
        <div className="result" id="allocatableQuantity">{allocatableQuantity}</div>
      </div>
      <div className="calculation-container">
        <h2>Freight Cost</h2>
        <label htmlFor="total_km">Total KM:</label>
        <input type="number" id="total_km" defaultValue="0" />
        <label htmlFor="cost_per_km">Cost per KM:</label>
        <input type="number" id="cost_per_km" defaultValue="0" />
        <label htmlFor="additional_expense">Additional Expense:</label>
        <input type="number" id="additional_expense" defaultValue="0" />
        <button onClick={calculateFreightCost}>Calculate</button>
        <div className="result" id="freightCost">{freightCost}</div>
      </div>
    </div>
  );
}

export default Calci;
