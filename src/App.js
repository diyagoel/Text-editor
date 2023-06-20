import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar'
import Textform from './components/Textform'
import Alert from './components/Alert';
function App() {
  const [mode,setMode] = useState('light')
  const [alert,setAlert] = useState(null)

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='gray'
      showAlert("Dark mode is enabled","success")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white'
      showAlert("Light mode is enabled","success")
    }

  }

  return (
   <>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3 w-90">
      <Textform heading="Enter the text below" alert={showAlert} mode={mode} toggleMode={toggleMode}/>
    </div>
    {/* <About toggleMode={toggleMode}/> */}
   </>
  );
}

export default App;
