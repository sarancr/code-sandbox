import React, {useState} from 'react';
import './style.css'

const App = () => {

  const [value ,setValue] = useState(0);

  return (
    <div >
      <h1 className = "header">Counter</h1>
      <div className = "button">
      <button onClick = { () => setValue(value+1)}>Increase</button>
      <button onClick = { () => setValue(value-1)}>Decrease</button>
      <div> {value}</div>
      </div>
    </div>
  )

}

export default App;