import { useState } from 'react'
import UserProfile from './components/UserProfile'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
       <UserProfile/>
      </div>
      
    </>
  )
}

export default App
