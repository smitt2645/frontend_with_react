import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const handleCounting = (action) => {
    if (action === 'Inc') {
      setCount(count + 1)
    } else if (action === 'Dec') {
      setCount(count - 1)
    }
  }

  return (
    <div className="App">
      <h2>{count}</h2>

      <div className="container">
        <button onClick={() => handleCounting('Inc')}>Increase</button>
        <button onClick={() => handleCounting('Dec')}>Decrease</button>
      </div>
    </div>
  )
}

export default App
