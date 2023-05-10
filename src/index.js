import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './css/reset.css';
import './css/style.css';


const rootElement = document.querySelector('.total');

createRoot(rootElement).render(<App />);
/// colocar um set com a proriedade pra ficar escuro e desabilitar o boton