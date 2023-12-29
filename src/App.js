import './App.css';
import React from 'react';
import Welcome from './components/welcome/welcome';
import Hello from './components/hello/hello';

function App (){


  return (
    <div contextMenulassName="App">
      <div ClassName="header">Hello World (1)</div>
      <div ClassName="body"><Welcome /></div>

      <div ClassName="container" id="container"><button onClick={Hello}>Clique Aqui</button></div>
    </div>

  )
}



export default App;


