import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("UpperCase was Clicked"+text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Capital Letters!!","success");
  };
  const handleLowClick = () => {
    // console.log("UpperCase was Clicked"+text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Small Letters!!","success");
  };
  const handleOnChange = (event) => {
    //console.log("Onchange");
    setText(event.target.value);
  };
  const handleClear=()=>{
    setText("");
    props.showAlert("Text Cleared Successfully!!","success");
  }
  // code for copying text
  const handleCopy=()=>{
    let text = document.getElementById("myBox");
     text.select();
     navigator.clipboard.writeText(text.value);
     props.showAlert("Copied to Clipboard!!","success");
  }
  //code for handling extra spaces
  const handleExtraSpaces = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Removed Extra spacaces!!","success");
  }
  //text="updating text" not allowed in react
  //setText("Enter your text here"); allowed
  const [text, setText] = useState("Enter text here");
  return (
    <>
      <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3 my-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
            style={{backgroundColor:props.mode==='dark'?'#1b1b32':'white',color:props.mode==='dark'?'white':'black'}}
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>
          Convert Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>
          Convert Lowercase
        </button>
        <button className="btn btn-primary my-2 mx-2" onClick={handleClear}>
          Clear
        </button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>
         Copy Text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>
        ExtraSpaces
        </button>
      </div>
      <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h2>Text Summary</h2>
        <p>
          {text.charAt(0)===''?0:text.split(" ").length} words and {text.replace(/ /g, "").length} characters
        </p>
        <p>{Math.floor(0.008 * text.split(" ").length)} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:'Enter something in the above textbox to preview it here..'}</p>
      </div>
    </>
    Math
  );
}
