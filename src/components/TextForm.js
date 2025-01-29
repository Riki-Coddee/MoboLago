import React, {useState} from 'react' 
export default function TextForm(props) {
  const [text, setText] = useState("Enter Your Text here");
  const handleOnChange = (event)=>{
  setText(event.target.value);
  }
  const handleOnClick= ()=>{
  let newText = text.toUpperCase();
  setText(newText);
  props.showAlert("Conveted to Uppercase", "success");
  }
  return (
    <div>
        <div className="mb-3" style={{background: props.mode === 'light'?'white':'#444141', color: props.mode === 'light'?'black':'white'}}>
            <h1>{props.heading}</h1>
            <label htmlFor="exampleFormControlTextarea1" className="form-label"></label>
            <textarea className="form-control" id="exampleFormControlTextarea1" value={text} style={{background: props.mode === 'light'?'white':'black', color: props.mode === 'light'?'black':'white'}} onChange={handleOnChange} rows="3"></textarea>
        </div>
        <button className="btn btn-primary"  onClick={handleOnClick}>Convert to Uppercase</button>
    </div>
  )
}
