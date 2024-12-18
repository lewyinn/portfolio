import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import Home from './pages/Home.jsx'
import About from './pages/about.jsx'
import Projects from './pages/projects.jsx'
import { ThemeProvider } from './libs/ThemeContext.jsx'
import { SpeedInsights } from "@vercel/speed-insights/react"

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Projects />} />
          <SpeedInsights />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);