import React, { useState } from 'react';
import './App.css';

function App() {
  //setting variables and their function to set value using useState
  //OnChange or default Value is required to use value of any input
  const [input1, setInput1] = useState('1');
  const [input2, setInput2] = useState('2');
  const [operator, setOperator] = useState('');
  const [result, setResult] = useState('Please start using...');

  //function to set operator
  const handleOperatorClick = (chosenOperator) => {
    setOperator(chosenOperator);
  };

  //function to clear everything using their functions
  const handleClearClick = () => {
    setInput1('');
    setInput2('');
    setOperator('');
    setResult('');
  };

  //to change value of input, this on change function is must. And using this function, we change value of the input on change
  const handleNumberChange = (event, inputNumber) => {
    const value = event.target.value;
    if (inputNumber === 1) {
      setInput1(value);
    } else if (inputNumber === 2) {
      setInput2(value);
    }
  };

  //calculations here
  //Ask about below input variables that are declared in a different state but user in this function
  // Ask about the set functions . delaraed somewhere else but used here.
  const handleEqualClick = () => {
    let calculatedResult = '';
    const num1 = parseFloat(input1);
    const num2 = parseFloat(input2);

    if (!isNaN(num1) && !isNaN(num2)) {
      switch (operator) {
        case '+':
          calculatedResult = (num1 + num2).toString();
          break;
        case '-':
          calculatedResult = (num1 - num2).toString();
          break;
        case '*':
          calculatedResult = (num1 * num2).toString();
          break;
        case '/':
          calculatedResult = (num1 / num2).toString();
          break;
        default:
          calculatedResult = '';
      }
    }

    setResult(calculatedResult);
  };

  return (
    <div className="calculator">
      <input type="number" id="input1" name="input1" placeholder="Enter value 1" value={input1} onChange={(e) => handleNumberChange(e, 1)} />
      <span className="operator">{operator}</span>
      <input type="number" id="input2" name="input2" placeholder="Enter value 2" value={input2} onChange={(e) => handleNumberChange(e, 2)} />

      <br />

      <button id="add" onClick={() => handleOperatorClick('+')}>+</button>
      <button id="subtract" onClick={() => handleOperatorClick('-')}>-</button>
      <button id="multiply" onClick={() => handleOperatorClick('*')}>*</button>
      <button id="divide" onClick={() => handleOperatorClick('/')}>/</button>

      <br />

      <button id="equal" onClick={handleEqualClick}>=</button>
      <button id="clear" onClick={handleClearClick}>CLEAR</button>
      <div className="result">You answer is <br />{result}</div>
    </div>
  );
}

export default App;
