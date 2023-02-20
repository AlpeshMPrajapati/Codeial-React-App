import React, { useState } from "react";

export default function TextForm(props) {
  const handleUppercase = () => {
    // console.log("upper case button clicked")
    setText(text.toUpperCase());
    props.showAlert("Text is Uppercase","info")
  };
  const handleLowercase = () => {
    // console.log("upper case button clicked")
    setText(text.toLowerCase());
    props.showAlert("Text is lowercase !","info")

  };
  const handleClear = () => {
    // console.log("upper case button clicked")
    setText(text.replace(text, ""));
    props.showAlert("Clear the Text !","warning")

  };

  const handleOnChange = (event) => {
    // console.log("handle on Change")
    setText(event.target.value);
  };

  const handleCopy = ()=>{
    let text = document.getElementById('myBox')
    text.select();
    navigator.clipboard.writeText(text.value)
    props.showAlert("Text Copied :) !","success")

  }

  const handleExtraSpaces = ()=>{
    let newText = text.split(/[ ]+/)
    setText(newText.join(" "))
    props.showAlert("Extra Spaces Deleted","success")

  }

  const [text, setText] = useState("");
  // text = "new text";//wrong way to change the state
  // setText("new text");//correct way to change the state
  return (
    <>
      <div className="container" style={{color:props.mode === 'dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            style = {{color:props.mode === 'dark'?'white':'#001e36',backgroundColor:props.mode === 'dark'?'#042743':'white'}}
            value={text}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUppercase}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLowercase}>
          Convert to Lowercase
        </button>
        <button className="btn btn-warning mx-2" onClick={handleClear}>
          Clear Text
        </button>
        <button className="btn btn-secondary mx-2" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-secondary mx-2" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
      </div>
      <div className="container my-3" style={{color:props.mode === 'dark'?'white':'#042743'}}>
        <h2>Your Text Summery</h2>
        <p>{text.split(" ").length-1} words and  {text.length} characters</p>
        <p>{Math.round(0.8*text.split(" ").length)/100} Minutes read</p>
        <p>{text.split(".").length -1} Sentance</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter text to preview"}</p>
      </div>
    </>
  );
}
