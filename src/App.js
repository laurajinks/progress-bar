import React, {useState, useEffect} from 'react'
import './App.css'
import ProgressBar from './components/ProgressBar'

let timeout
const length = 20

function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (count < 20) {
      timeout = setTimeout(() => {
        setCount(prevCount => prevCount + 1)
      }, 500)
    }
    return () => clearTimeout(timeout)
  }, [count])
  return (
    <div className='App'>
      <div>Standard bar</div>
      <ProgressBar length={length} progress={count} />
      <div>Bar with custom styling and without transition</div>
      <ProgressBar
        length={length}
        progress={count}
        barStyle={{background: 'red', transition: 'none'}}
        containerStyle={{border: '1px solid #D5D5D5', height: 20}}
      />
    </div>
  );
}

export default App
