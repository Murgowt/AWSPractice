import logo from './logo.svg';
import {useState} from 'react';
import './App.css';

function App() {
  const [counter,increaseCounter] = useState(0);
  const handler =() =>{
    increaseCounter(counter+1);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          The counter value is {counter} 
        </p>
        <button onClick={handler}>Click Me!!</button>
      
      </header>
    </div>
  );
}

export default App;
