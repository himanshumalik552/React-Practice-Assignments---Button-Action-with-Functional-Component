import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {
const [state, setState] = useState('')

  return (
    <div id="main">
      {/* // Do not alter the main div */}

      <p id="para">{state}</p>
        <button id="click" onClick={()=>{
          setState(" Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy");
        }} >on click</button>
    </div>
  );
}


export default App;
