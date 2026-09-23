import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
// import LoginForm from './components/Login'
import RegistrationFrom from './components/RegistrationForm'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   {/* <LoginForm/> */}
   <RegistrationFrom/>
   </>
  )
}

export default App
