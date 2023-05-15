// import logo from './logo.svg';
import Navbar from './components/Navbar';
import './App.css';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
import{
  BrowserRouter as Router,
  Routes,
  Route,
  Link
}from "react-router-dom";
// import Navbar from './components/Navbar';
function App() {
  // const [mode1, setMode1] = useState('primary')
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)
  const showAlert=(message,type)=>{
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null)
    },1500);
  }
  const toggleMode=()=>{
    if(mode==='light')
    {
      setMode('dark')
      // setMode1('warning')
      document.body.style.backgroundColor='#0d1d45'
      showAlert("Dark mode has been enabled","success")
    }
    else
    {
      setMode('light')
      // setMode1('primary')
      document.body.style.backgroundColor='white'
      showAlert("Light mode has been enabled","primary")

    }   
  }
  
  return (
    <>
  <Router>
    <Navbar title="Textutils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    <Routes>
      <Route exact path='/about' element={<About mode={mode}/>}>
        
      </Route>
      <Route exact path='/' element={<TextForm showAlert={showAlert} heading="Enter the text" mode={mode}/>}>
        
      </Route>
    </Routes>
    </div>
  </Router>
   
   </>
  );
}

export default App;
