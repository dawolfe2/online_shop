import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';

function Output(){
  return (
    <div>
        <App/>
    </div>
  )
}

ReactDOM.render(<Output/>, document.getElementById("root"))
