import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {
const [state, setState] = useState('')

  return (
    <div id="main">
      <p id="para"></p>
        <button id="click" onClick={()=>{
          setState( document.getElementById('para').innerHTML = "Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy");
        }}>on click</button>
    </div>
  );
}


export default App;
