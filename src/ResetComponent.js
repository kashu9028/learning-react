import React, { useState } from 'react'

function ResetComponent() {
    const handleClearClick = () => {
        //something here
    }
    return (
        <>
            <button id="clear" onClick={handleClearClick}>CLEAR</button>
        </>
    )

}

export default ResetComponent;