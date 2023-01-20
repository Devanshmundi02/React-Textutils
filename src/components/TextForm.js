// import react functional components

// import React from 'react'

// import "useState" hook from react

import React, { useState } from 'react'






// import types of prop-types

// import PropTypes from 'prop-types'

export default function TextForm(props) {


    const handleUpClick = () => {
        // not neccesery
        // console.log("Uppercase was clicked"+text);
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showalert("Converted to uppercase","success");
    }

    const handlelowClick = () => {
        // not neccesery
        // console.log("Uppercase was clicked"+text);
        let newtext = text.toLowerCase();
        setText(newtext);
        props.showalert("Converted to lowercase","success");
    }

    const handlespeakClick = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
        props.showalert("Read the text","success");
    }


    const handleOnChange = (event) => {
        // not neccesery
        // console.log("On changed");

        // for type onn textarea
        setText(event.target.value);
    }

    const [text, setText] = useState("");

    // setText("i am hero"); correct way to change the state 

    return (
        <>
            <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="mybox" rows="8" value={text} onChange={handleOnChange} style = {{backgroundColor: props.mode==='dark'?'#042743':'white', color: props.mode==='dark'?'white':'#042743'}} ></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to upper case letter</button>
                <button className="btn btn-primary mx-2" onClick={handlelowClick}>Convert to lower case letter</button>
                <button className="btn btn-primary mx-2" onClick={handlespeakClick}>want to listen text</button>
            </div>
            <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
                <h1>Your text summary</h1>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} how many minutes a normal human to read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text : "Enter something to the text box above to preview here."}</p>
            </div>
        </>
    )
}

// types of prop-types

// TextForm.propTypes = {
//     heading: PropTypes.string
//     // abouttext: PropTypes.string
// }
