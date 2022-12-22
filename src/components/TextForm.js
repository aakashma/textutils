import React from 'react'

export default function TextForm(props) {
  const [text, setText]=React.useState('Enter the text');
  function handleOnChange(event){
    setText(event.target.value);
  }

  function handleOnUpper(){
    let newtext=text.toLocaleUpperCase();
    setText(newtext);
  }
  function handleOnLower(){
    setText(text.toLowerCase());
  }

  return (
    <>
    <div className='container'>

        <h1>{props.heading}</h1>
        <div className="mb-3">        
            <textarea className="form-control" value={text} id="myBox" rows="10" onChange={handleOnChange}></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleOnUpper}>Change to UpperCase</button>
        <button className="btn  btn-primary mx-1" onClick={handleOnLower}>Change to LowerCase</button>
    </div>
            
    <div className='container my-3'>
              <h2>Text Summary</h2>
              <p>{text.split(" ").length} Words {text.length} Characters</p>
              <p>{0.008 * text.split(" ").length} Minutes Read</p>
              <h2>Preview</h2>
              <p>{text}</p>
    </div>
    </>
  )
}
