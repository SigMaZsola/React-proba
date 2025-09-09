import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ToggleSwitch from './components/ToggleSwitch'
import ExtensionCard from './components/ExtensionCard'

function App() {
  const [count, setCount] = useState(0)

  return (
      <ExtensionCard icon = "🤣" title = "devlens" description = "Lorem"/>

  )
}

export default App
