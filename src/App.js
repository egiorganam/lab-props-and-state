import React, { useState } from 'react';
import './App.css';

import { Counter } from './components/Counter'
import { Form } from './components/Form'

function App() {
  const [counter, setCounter] = useState(0)

  const clickPlus = () => setCounter(counter + 1)
  const clickMinus = () => setCounter(counter - 1)

  return (
    <div className="App">
      <Counter counter={counter} onClickPlus={clickPlus} onClickMinus={clickMinus}/>
      <Form />
      <Form />
    </div>
  );
}

export default App;
