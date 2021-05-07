import React, {Component, useState} from "react";
import ReactDom from 'react-dom';
import "./../styles/App.css";


function App() {
const [state, setState] = useState('')

  const change=()=>
  {
    ReactDom.render(<p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>, document.getElementById('root'));
  }


  return (
    <div id="main">
        <button id="click" onClick={change}>on click</button>
    </div>
  );
}


export default App;
