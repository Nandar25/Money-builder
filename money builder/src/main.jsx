import React from 'react'
//import React DOM to render the app in the browser
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'

//This connect React to the HTNL file (index.html)
ReactDOM.createRoot(document.getElementById('root')).render(


  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
