import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React, { useState } from "react";

function App() {
  const [mode,setMode] = useState('light');

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = "#001e36";
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = "white";
    }
  }

  return (
    <>
      <Navbar title = "Codeial" mode={mode} toggleMode = {toggleMode}/>
      <div className="container my-4">
      <TextForm heading="Enter the Text" mode={mode} toggleMode = {toggleMode}/>
      <About mode={mode} toggleMode = {toggleMode}/>
      </div>
    </>
  );
}

export default App;
