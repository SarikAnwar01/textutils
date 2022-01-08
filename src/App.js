
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');//wheather dark mode is on or not
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode("dark");
      document.body.style.backgroundColor = "#212529";
      showAlert("dark mode enabled", "success");
    }
    else {
      setMode("light")
      document.body.style.backgroundColor = "white";
      showAlert("light mode enabled", "success");
    }
  }
  return (
    <>
      <Router>
        <Navbar title="textutiles" abouttext="About" mode={mode} toggleMode={toggleMode} />

        <Alert alert=" " alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />} />


            {/* <TextForm showAlert={showAlert} heading="Enter the text" mode={mode} /> */}

            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text" mode={mode} />} />


          </Routes>
        </div>
      </Router>




    </>

  );
}

export default App;
