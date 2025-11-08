import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';
import Secondscounter from './components/Secondscounter';

let segundos = 0;

setInterval(() => {
  segundos += 1;
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <Secondscounter segundos={segundos}/>
    </React.StrictMode>
  );
}, 1000);


