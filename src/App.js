import './App.css';
import React from 'react';
import Timestamp from 'react-timestamp';
import Welcome from './components/welcome/welcome';

function App (){
  return (
    <div className="App">
      <div className="header">Hello World div</div> <Timestamp relative date={Date} autoUpdate />
    
      <div className="body"><Welcome /></div>
    </div>
  )
}



export default App;


