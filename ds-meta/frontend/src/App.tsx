import { useState } from 'react'
import './App.css'
import NotificationButton from './components/NotificationButton'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <h1>tudo ok</h1>

        <NotificationButton/>
    </div>
  )
}

export default App
