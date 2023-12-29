import './App.css';
import React, {useState} from 'react';
import Welcome from './components/welcome/welcome';
import Hello from './components/hello/hello';
import OlaMundo from './components/ola/ola';

function App (){

    let [titleText, setTitleText] = useState("Hello World (8)");
    const bodyText = 'Hello World (7)';

    
  
  return (
    <div ClassName="App">

      <div ClassName="header">Hello World (1)</div>
      <div ClassName="body"><Welcome /></div>
      <div ClassName="text">Hello World (3)</div>
      <div ClassName="paragraph">Hello World (4)</div>
      <div ClassName="quote">Hello World (5)</div>
      <div ClassName="note"><OlaMundo /></div>
      <div ClassName="function">{bodyText}</div>
      <div ClassName="input"> {titleText}</div>
      <div ClassName="container" id="container"><button onClick={Hello}>Clique Aqui</button></div>
      <div ClassName="footer">Hello World (10)</div>


    </div>

  )
}


export default App;


