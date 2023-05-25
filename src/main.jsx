import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './tailwind.css'
import { ToastContainer} from 'react-toastify';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <ToastContainer theme='colored'  autoClose={1000}/>
  </React.StrictMode>,
)


