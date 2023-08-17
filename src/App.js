//added by irzum
"use strict";
//added by irzum

import React, { useState, useEffect } from "react";
import "./App.css";
//adding toaster
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  //function to call toast
  //const notify = () => toast("Wow so easy!");
  useEffect(() => {
    // Show toast message on page load
    toast.info("Welcome Irzum!", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 1000, // Auto-close the toast after 5 seconds
    });
  }, []);
  //setting variables and their function to set value using useState
  //OnChange or default Value is required to use value of any input
  // const [input1, setInput1] = useState('');
  // const [input2, setInput2] = useState('');
  // const [operator, setOperator] = useState('');
  // const [result, setResult] = useState('null');

  //combined states
  const [calculatorState, setCalculatorState] = useState({
    input1: "",
    input2: "",
    operator: "",
    result: "null",
  });

  //function to set operator
  const handleOperatorClick = (chosenOperator) => {
    //setOperator(chosenOperator);
    setCalculatorState((prevState) => ({
      ...prevState,
      operator: chosenOperator,
    }));
  };

  //function to clear everything using their functions
  const handleClearClick = () => {
    setCalculatorState((prevState) => ({
      ...prevState,
      input1: "",
      input2: "",
      operator: "",
      result: "null",
    }));
    // setInput1('');
    // setInput2('');
    // setOperator('');
    // setResult('null');
  };

  //to change value of input, this on change function is must. And using this function, we change value of the input on change
  const handleNumberChange = (event, inputNumber) => {
    // const min = 1;
    // const max = 100;
    // // const value = Math.max(min, Math.min(max, Number(event.target.value)));
    // if (inputNumber === 1) {
    //   //setInput1(value);
    //   setCalculatorState((prevState) => ({
    //     ...prevState,
    //     input1: value,
    //   }));
    // } else if (inputNumber === 2) {
    //   //setInput2(value);
    //   setCalculatorState((prevState) => ({
    //     ...prevState,
    //     input2: value,
    //   }));
    // }

    //added by irzum
    const value = event.target.value >= 0 ? event.target.value : "";
    setCalculatorState((prevState) => ({
      ...prevState,
      [event.target.name]: value,
    }));
    //added by irzum
  };

  //calculations here
  //Ask about below input variables that are declared in a different state but user in this function
  // Ask about the set functions . delaraed somewhere else but used here.
  const handleEqualClick = () => {
    let calculatedResult = "";
    const num1 = parseFloat(input1);
    const num2 = parseFloat(input2);

    if (!isNaN(num1) && !isNaN(num2)) {
      switch (operator) {
        case "+":
          calculatedResult = (num1 + num2).toString();
          break;
        case "-":
          calculatedResult = (num1 - num2).toString();
          break;
        case "*":
          calculatedResult = (num1 * num2).toString();
          break;
        case "/":
          calculatedResult = (num1 / num2).toString();
          break;
        default:
          calculatedResult = "";
      }
    }

    //setResult(calculatedResult);
    setCalculatorState((prevState) => ({
      ...prevState,
      result: calculatedResult,
    }));
  };

  // Validation function to check if input is non-negative
  const isNonNegative = (value) => {
    return parseFloat(value) >= 0 || value === "";
  };
  //get state and use as normal variables
  const { input1, input2, operator, result } = calculatorState;
  return (
    <div className="calculator">
      <input
        type="number"
        id="input1"
        name="input1"
        placeholder="Enter value 1"
        value={input1}
        onChange={(e) => handleNumberChange(e, 1)}
        className={!isNonNegative(input1) ? "error" : ""}
      />
      <span className="operator">{operator}</span>
      <input
        type="number"
        id="input2"
        name="input2"
        placeholder="Enter value 2"
        value={input2}
        onChange={(e) => handleNumberChange(e, 2)}
        className={!isNonNegative(input2) ? "error" : ""}
      />

      <br />

      <button id="add" onClick={() => handleOperatorClick("+")}>
        +
      </button>
      <button id="subtract" onClick={() => handleOperatorClick("-")}>
        -
      </button>
      <button id="multiply" onClick={() => handleOperatorClick("*")}>
        *
      </button>
      <button id="divide" onClick={() => handleOperatorClick("/")}>
        /
      </button>

      <br />
      {/* <button onClick={notify}>Notify!</button> */}
      <ToastContainer />
      {/* Conditional show */}
      {input1 !== "null" &&
        input1 !== "" &&
        input2 !== "null" &&
        input2 !== "" && (
          <>
            <button id="equal" onClick={handleEqualClick}>
              =
            </button>
            <button id="clear" onClick={handleClearClick}>
              CLEAR
            </button>
          </>
        )}

      {/* Condition */}
      {result !== "null" && result !== "" && (
        <div className="result">
          Your answer is <br />
          {result}
        </div>
      )}
    </div>
  );
}

export default App;
