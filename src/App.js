import { useState } from "react";
import "./App.css";


import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from "./components/About";
function App() {
  const [mode,setMode] = useState('light'); //wheather dark mode is enabled or not
  const [modeText,setModeText]=useState('Enable')

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      setModeText('Disable')
      document.body.style.backgroundColor='#322F3D'
      
    }
    else{
      setMode('light');
      setModeText('Enable')
      document.body.style.backgroundColor='white'
     
      
     
     
    }
  }
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} toggleText={modeText}/>
      <div className="container my-3">
      <TextForm mode={mode} heading="Enter the text to analyze"/>
      {/* <About/> */}
      </div>
    </>
  );
}
export default App;
