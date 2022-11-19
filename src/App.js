import { useState } from 'react';
import './App.css';
import Alert from './component/Alert';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light') //whether dark mode enable ot not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null)
    }, 1000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark mode has been Enabled", "success")
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been Enabled", "success")
    }
  }
  return (
    <>
      {/* <Router> */}
      {/* <Navbar /> */}
      <Navbar title='TextUtils' aboutText='AboutUs' mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className='container my-3'>
        {/* <Routes> */}
        <TextForm showAlert={showAlert} heading='Enter the text to analyze below' mode={mode} />
        {/* <Route  path="/" element={} />
            <Route  path='/about' element={<About />}></Route> */}
        {/* </Routes> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
