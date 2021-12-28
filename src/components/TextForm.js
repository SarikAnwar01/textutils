import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("converted to Uppercase!", "success");
    }
    const handleloClick = () => {
        // console.log("uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("converted to Lowercase!", "success");
    }
    const handlecopyClick = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Text Copied!", "success");
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra Space Removed !", "success");
    }

    const handleclearClick = () => {
        // console.log("uppercase was clicked" + text);
        let newText = "";
        setText(newText)
        props.showAlert("Type Space Cleared!", "success");
    }
    const handleOnChange = (event) => {
        // console.log("on change");
        setText(event.target.value);
    }
    const [text, setText] = useState("");
    // setText("new text");
    return (
        <>
            <div style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">

                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="Mybox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleloClick}>Convert to lowercase</button>
                <button className="btn btn-primary mx-2" onClick={handleclearClick}>Clear Text</button>
                <button className="btn btn-primary mx-2" onClick={handlecopyClick}>Copy</button>
                <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>

            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>Your Text Summary</h2>
                <p>{text.split(" ").length}words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length}Minutes to read words</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter something in the box above for preview"}</p>
            </div>
        </>
    )
}
