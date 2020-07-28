import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


// Deletar, não será necessário utilizar, pois o arquivo serviceWorker foi excluso.
// serviceWorker.unregister();
