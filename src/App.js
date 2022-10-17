import Title from './components/Title'
import './App.css';
import FunctionalTitle from './components/FunctionalTitle';
import {useState} from 'react'

function App() {
  
  const [number, setNumber] = useState(0);

  function handelDecrement (e){
    setNumber(number -1)
  }

  function handelIncrement (e){
    setNumber(number +1)
  }

  return (
    <div className="App">
      {number <= 0 ? null :<Title/>}
      {number <= 0 ? null :<FunctionalTitle/>}
      <h1>Number {number}</h1>
      <button onClick={handelIncrement}>Increment</button>
      <button onClick={handelDecrement}>Decrement</button>
      </div>
  );
}

export default App;
