// Code EyesOnMe Component Here
import React from 'react';

function EyesOnMe() {
    function focusEvent(event) {
        console.log('Good!');
    }

    function blurEvent(event) {
        console.log('Hey! Eyes on me!')
    }

    return (<button onFocus={focusEvent} onBlur={blurEvent}>Eyes on me</button>)

}



export default EyesOnMe;