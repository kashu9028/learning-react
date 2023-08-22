//added by irzum
"use strict";
//added by irzum

import React, { useState, useEffect } from "react"
import "./App.css"
//adding toaster
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
//adding components
import InputComponent from './InputComponent'
import OperatorComponent from './OperatorComponent'
import ResetComponent from './ResetComponent'
import OutputComponent from './OutputComponent'
import CalculationComponent from './CalculationComponent'

function App() {

  const [Inputvalue1, setValue1] = useState('');
  const [Inputvalue2, setValue2] = useState('');

  const handleValueChange = (newValue1, newValue2) => {
    setValue1(newValue1);
    setValue2(newValue2);
  };
  //function to call toast
  //const notify = () => toast("Wow so easy!");
  useEffect(() => {
    // Show toast message on page load
    toast.info("Welcome Irzum!", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 1000, // Auto-close the toast after 5 seconds
    });
  }, []);

  return (
    <>
      <ToastContainer />
      <InputComponent
        value1={Inputvalue1}
        value2={Inputvalue2}
        onValueChange={handleValueChange}
      />
      <OperatorComponent />
      <ResetComponent />
      <CalculationComponent value1={Inputvalue1} value2={Inputvalue2} />
      <OutputComponent />

    </>

  );
}

export default App;
