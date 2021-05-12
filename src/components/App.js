import React, {Component, useState} from "react";
import ReactDom from 'react-dom';
import "./../styles/App.css";


function App() {
const [state, setState] = useState(false)

  const change=()=>
  {
   setState({state:true});
  }


  return (
    <div id="main">
				{state && <p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>}
        <button id="click" onClick={change}>on click</button>
    </div>
  );
}


export default App;
