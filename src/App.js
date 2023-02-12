import React, { useState } from 'react';
import './App.css';

const Calculator = () => {
  const [result, setResult] = useState(0);
  const [input, setInput] = useState('');

  const handleClick = button => {
    if (button === 'C') {
      setInput('');
      setResult('');
    } else if (button === '=') {
      setInput(eval(input));
      setResult(eval(input));
    } else {
      setInput(input + button);
    }
  };

  return (
    <div className="calculator">
    <h1 className='jumbotron text-center'>React Calculator</h1>
    <input type="text" value={input || result} />
      <br />
      <br />
      <div className='btn-box'><strong><bold>
      <button onClick={() => handleClick('1')}>1</button>
      <button onClick={() => handleClick('2')}>2</button>
      <button onClick={() => handleClick('3')}>3</button>
      <button onClick={() => handleClick('+')}>+</button>
      <br />
      <button onClick={() => handleClick('4')}>4</button>
      <button onClick={() => handleClick('5')}>5</button>
      <button onClick={() => handleClick('6')}>6</button>
      <button onClick={() => handleClick('-')}>-</button>
      <br />
      <button onClick={() => handleClick('7')}>7</button>
      <button onClick={() => handleClick('8')}>8</button>
      <button onClick={() => handleClick('9')}>9</button>
      <button onClick={() => handleClick('*')}>x</button>
      <br />
      <button onClick={() => handleClick('C')}>C</button>
      <button onClick={() => handleClick('0')}>0</button>
      <button onClick={() => handleClick('.')}>.</button>
      <button onClick={() => handleClick('/')}>÷</button><br />
      
      <button onClick={() => handleClick('=')} className='btn btn-success'>=</button></bold></strong>
    </div>
    </div>
  );
};

export default Calculator;
