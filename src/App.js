import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React, { useState } from "react";
import Alert from "./components/Alert";

function App() {
  const [mode,setMode] = useState('light');
  const [gMode,setGMode] = useState('light');
  const [alert,setAlert] = useState(null);

  const showAlert = (message,type)=>{
      setAlert({
        messsage:message,
        type:type
      });
      setTimeout(() => {
        setAlert(null)
      }, 1500);
  }

  const greenMode = () =>{
    if(gMode === 'light'){
      setGMode('success')
      document.body.style.backgroundColor = "darkgreen";
      showAlert("Dark Green Mode has been enabled","success")
    }
    else{
      setGMode('light')
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled","success")
    }
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = "#001e36";
      showAlert("Dark Mode has been enabled","success")
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled","success")
    }
  }

  return (
    <>
      <Navbar title = "Codeial" mode={mode}  gMode={gMode} greenMode={greenMode} toggleMode = {toggleMode}/>
      <Alert alert ={alert}/>
      <div className="container my-4">
      <TextForm heading="Enter the Text" showAlert={showAlert} gMode={gMode} greenMode={greenMode} mode={mode} toggleMode = {toggleMode}/>
      <About gMode={gMode} greenMode={greenMode} mode={mode} toggleMode = {toggleMode}/>
      </div>
    </>
  );
}

export default App;
