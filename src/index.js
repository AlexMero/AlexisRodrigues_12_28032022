import './style/style.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import Error from './pages/Error/Error.jsx'
import { StoreProvider } from './providers/Store'

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider>
      <Router>
        <Routes>
          <Route path="/user/:id" element={<Home />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
