import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
// Router importing
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  const [mode, setMode] = useState("light"); //wheather dark mode is enabled or not
  const [modeText, setModeText] = useState("Enable");
  const [alert, setAlert] = useState(null);

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setModeText("Disable");
      document.body.style.backgroundColor = "#322F3D";
      showAlert("Dark mode has been enabled!!", "success");
      //document.title='TextUtils Dark Mode '
      // setInterval(()=>{
      //   document.title='Textutils is amazing'
      // },2000);
    } else {
      setMode("light");
      setModeText("Enable");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled!!", "success");
    }
  };
  // for alert state
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  return (
    <Router>
       <Navbar
        title="TextUtils"
        mode={mode}
        toggleMode={toggleMode}
        toggleText={modeText}
      />
      <Alert alert={alert} />
      {/* <div className="container my-3">
      </div> */}
      <Switch>
      <Route exact path="/about">
          <About showAlert={showAlert} mode={mode}/>
        </Route>
        <Route exact path="/">
          <TextForm
            showAlert={showAlert}
            mode={mode}
            heading="Enter the text to analyze"
          />
        </Route>
       
      </Switch>

     
    </Router>
  );
}
export default App;
