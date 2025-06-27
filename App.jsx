import { useState ,useEffect} from 'react'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HRloginpage from './component/HRloginpage.jsx'
import { Page } from './component/register'

function App() {
  const [message, setMessage] = useState('')
   const [view, setView] = useState("register");


useEffect(() => {
    fetch('http://localhost:3000/api/message')
      .then(res => res.json())
      .then(data => setMessage(data.message));
      // .catch(err => console.error(err)); 
    
    }, []);

  return (
    <>
    {view === "register" && <Page onRegisterSuccess={() => setView("login")} />}
      {view === "login" && <HRloginpage />}
   
    <h1>{message} </h1>
     {/* <Page/> */}
     
    </>
  )
}

export default App
