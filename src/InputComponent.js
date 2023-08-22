import React, { useState } from 'react';

const InputComponent = ({ input1, input2, onValueChange }) => {

    // const [input1, setInput1] = useState('');
    // const [input2, setInput2] = useState('');

    const handleNumber1Change = (e) => {
        const newValue = e.target.value;
        //setInput1(newValue);
        onValueChange(input1, newValue);
    };

    const handleNumber2Change = (e) => {
        const newValue = e.target.value;
        //setInput2(newValue);
        onValueChange(input2, newValue);
    };

    return (
        <>
            <input
                type="number"
                id="input1"
                name="input1"
                placeholder="Enter value 1"
                onChange={(e) => handleNumber1Change}

            />
            <input
                type="number"
                id="input2"
                name="input2"
                placeholder="Enter value 2"
                onChange={(e) => handleNumber2Change}

            />
        </>
    );
};

export default InputComponent;