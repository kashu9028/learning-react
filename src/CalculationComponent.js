import React, { useState } from 'react'

const CalculationComponent = ({ value1, value2 }) => {

    // const handleEqualClick = () => {
    //     let calculatedResult = "";
    //     if (!isNaN(value1) && !isNaN(value2)) {
    //         switch (operatorChosen) {
    //             case "+":
    //                 calculatedResult = (value1 + value2).toString();
    //                 break;
    //             case "-":
    //                 calculatedResult = (value1 - value2).toString();
    //                 break;
    //             case "*":
    //                 calculatedResult = (value1 * value2).toString();
    //                 break;
    //             case "/":
    //                 calculatedResult = (value1 / value2).toString();
    //                 break;
    //             default:
    //                 calculatedResult = "";
    //         }
    //     }

    //     setResult(calculatedResult);

    // };
    return (
        <>
            {/* <button id="equal" onClick={handleEqualClick}>
                =
            </button> */}
            <p>Value 1: {value1} - {value2}</p>
        </>
    )

}

export default CalculationComponent;