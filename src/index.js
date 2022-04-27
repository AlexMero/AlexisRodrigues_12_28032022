import './style/style.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import { StoreProvider } from './providers/Store'
import { getUserData } from './services/dataManager.js'

getUserData()

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
