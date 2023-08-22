import React, { useState } from 'react'

function OperatorComponent() {

    const [operator, setOperator] = useState('');
    //function to set operator
    const handleOperatorClick = (chosenOperator) => {
        // setOperator(chosenOperator);
    };

    return (
        <>
            <button id="add" onClick={() => {
                return handleOperatorClick("+");
            }}>
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
        </>
    )
}

export default OperatorComponent;