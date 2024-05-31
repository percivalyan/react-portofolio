import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './dist/css/main.css'; // Path harus sesuai dengan struktur folder proyekmu

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// Route Doom
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
