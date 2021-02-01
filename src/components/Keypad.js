import React from "react";

function Keypad() {
    function handleSubmitLogin(event) {
        event.preventDefault();
        console.log('Entering password...');
    }

    return (<input type='password' onChange={handleSubmitLogin} />)
}



export default Keypad;