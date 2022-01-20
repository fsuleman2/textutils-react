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
    // let text = document.getElementById("myBox");
    //  text.select();
     navigator.clipboard.writeText(text);
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
        <h2>{props.heading}</h2>
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
        <button  disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>
          Convert Uppercase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLowClick}>
          Convert Lowercase
        </button>
        <button disabled={text.length===0} className="btn btn-primary my-1 mx-2" onClick={handleClear}>
          Clear
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>
         Copy Text
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}>
        ExtraSpaces
        </button>
      </div>
      <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h2>Text Summary</h2>
        <p>
          {/* {text.charAt(0)===''?0:text.split(" ").length} words and {text.replace(/ /g, "").length} characters */}
          {text.split(/\s+/).filter((e)=>{return e.length!==0}).length} words and {text.replace(/ /g, "").length} characters
        </p>
        <p>{0.008 * text.split(" ").filter((e)=>{return e.length!==0}).length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:'Nothing to preview'}</p>
      </div>
    </>
  );
}
