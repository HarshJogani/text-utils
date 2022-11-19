import React, { useState } from 'react'


export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase !", "success");

    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowecase !", "success");

    }

    const handleonChange = (event) => {
        setText(event.target.value)
    }

    const handleClearText = () => {
        setText('');
        props.showAlert("Clear Text", "success");
    }

    const handleCopyText = () => {
        var text = document.getElementById('myBox')
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copy Text", "success");

    }

    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Remove extra space", "success");

    }

    const handleWord = (text) => {
        // let word = text.split(/[ ]+/);
        return text.replace(/\s{2,}/g, ' ')
        // return (/\s/).test(text);
        // const textword = word.join(" ")
        // return textword;
    }
    const [text, setText] = useState('');
    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" style={{
                        backgroundColor: props.mode === 'dark' ? '#042743' : 'white',
                        color: props.mode === 'dark' ? 'white' : '#042743'
                    }} onChange={handleonChange} value={text} id="myBox" rows="8"></textarea>
                </div>
                <button className='btn btn-primary mx-1' onClick={handleUpClick}>Convert to Uppercase</button>
                <button className='btn btn-primary mx-1' onClick={handleLoClick}>Convert to Lowercase</button>
                <button className='btn btn-primary mx-1' onClick={handleClearText}>Clear Text</button>
                <button className='btn btn-primary mx-1' onClick={handleCopyText}>Copy Text</button>
                <button className='btn btn-primary mx-1' onClick={handleExtraSpace}>Remove extra space</button>
            </div>
            <div className='container my-3' style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h1>Your text summary</h1>
                <p>{handleWord(text).length} words {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes to read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : 'Enter Somthing to preview hear'}</p>
            </div>
        </>
    )
}