import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("UpperCase was Clicked"+text);
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLowClick = () => {
    // console.log("UpperCase was Clicked"+text);
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleOnChange = (event) => {
    //console.log("Onchange");
    setText(event.target.value);
  };
  const handleClear=()=>{
    setText("");
  }
  // code for copying text
  const handleCopy=()=>{
    let text = document.getElementById("myBox");
     text.select();
     navigator.clipboard.writeText(text.value);
  }
  //code for handling extra spaces
  const handleExtraSpaces = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  }
  //text="updating text" not allowed in react
  //setText("Enter your text here"); allowed
  const [text, setText] = useState("Enter text here");
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3 my-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>
          Convert Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>
          Convert Lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClear}>
          Clear
        </button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>
         Copy Text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>
        ExtraSpaces
        </button>
      </div>
      <div className="container my-3">
        <h2>Text Summary</h2>
        <p>
          {text.split(" ").length} words and {text.replace(/ /g, "").length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
