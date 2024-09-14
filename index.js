import React from 'react';
import ReactDOM from 'react-dom';
import './app.css'; // Asegúrate de que este archivo existe
import App from './components/app'; // La ruta correcta al componente App

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')  // Esto se refiere al <div id="root"></div> en index.html
);