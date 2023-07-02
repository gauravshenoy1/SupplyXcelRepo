import React, { Component } from "react";
import "./App.scss";
import EntryPoint from "./components/entryPoint";
import Home from "./components/home/home.container";


export class App extends Component {
  render(){
    return(
      <>
      <Home />
      </>
    )
  }
 
}

export default App;
