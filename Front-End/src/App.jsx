import { useState } from 'react'
import Login from './components/Login/Login'
import './App.css'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  if (!isLoggedIn) {
    return <Login />
  }

  return (
    <>
      <section id="center">
        <div>
          <h1>Welcome!</h1>
          <p>You are logged in successfully.</p>
        </div>
      </section>
    </>
  )
}

export default App
