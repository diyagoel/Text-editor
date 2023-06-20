import React, { useState } from 'react';

export default function Textform(props){
    const handleUpClick=()=>{
        console.log("uppercase")
        let newText = text.toUpperCase()
        setText(newText)
        props.alert("Converted to uppercase","success");
    }

    const handleLowClick=()=>{
        console.log("uppercase")
        let newText = text.toLowerCase()
        setText(newText)
        props.alert("Converted to lowercase","success");
    }

    const capitalize = () => {
        let firstchar = text.charAt(0); // storing the first char of the string
        let newText= firstchar.toUpperCase(); // converting that to uppercase
        setText(newText+text.slice(1)); // printing it with rest excluding the first char by using slice
        props.alert("Converted to camelcase","success");
    }
    const handleSpace=()=>{
        let ntext=text.split(/[ ]+/)
        setText(ntext.join(" "))
        props.alert("Whitespaces removed","success");
    }
    const clickOnChange=(event)=>{
        console.log("text changed")
        setText(event.target.value)
    }

    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
      }
    
    const clear=()=>{
        let newText = ('')
        setText(newText)
        props.alert("Text is cleared","success");
    }
    
    const [text, setText] = useState(''); 

    return(
        <>
        <div className="container" style={{color:props.mode === 'light' ? 'dark' : 'light'}}>
            <h5>{props.heading}</h5>
            <div className="mb-3">
                {/* <label for="exampleFormControlTextarea1" className="form-label"></label> */}
                <textarea className="form-control" value={text} onChange={clickOnChange} id="exampleFormControlTextarea1" rows="9"></textarea>
            </div>
            <button className="btn btn-success" onClick={handleUpClick}>Convert to UPPERCASE</button>
            <button className="btn btn-success mx-3" onClick={handleLowClick}>Convert to lowercase</button>
            <button className="btn btn-success mx-3" onClick={capitalize}>Convert to camelCase</button>
            <button className="btn btn-success mx-3" onClick={handleSpace}>Remove Whitespaces</button>
            <button type="submit" onClick={speak} className="btn btn-success mx-2 my-2">Speak Text</button>
            <button className="btn btn-success mx-3" onClick={clear}>Clear Text</button>
        </div>
        <div className="container my-3" style={{color:props.mode === 'light' ? 'dark' : 'light'}}>
            <h5>Text-summary</h5>
            <p>{(text.split(" ").length)} words ,{text.length} characters ,
            { 0.008*(text.split(" ").length)}average minutes to read the text</p>
            <h5 my-2>PREVIEW</h5>
            <p>{text.length>0?text:"Enter some text in textbox above to preview it"}</p>
        </div>
        </>
    )
}