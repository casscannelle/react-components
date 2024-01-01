import './App.css';
import React, {useState} from 'react';
import Welcome from './components/welcome/welcome';
import Hello from './components/hello/hello';
import OlaMundo from './components/ola/ola';

function App (){

    let [titleText, setTitleText] = useState("Hello World (8)");
    const bodyText = 'Hello World (7)';

    
  
  return (
    <div className="App">

      <div className="header">Hello World (1)</div>
      <div className="body"><Welcome /></div>
      <div className="text">Hello World (3)</div>
      <div className="paragraph">Hello World (4)</div>
      <div className="quote">Hello World (5)</div>
      <div className="note"><OlaMundo /></div>
      <div className="function">{bodyText}</div>
      <div className="input"> {titleText}</div>
      <div className="container" id="container"><button onClick={Hello}>Clique Aqui</button></div>
      <div className="footer">Hello World (10)</div>


    </div>

  )
}


export default App;


