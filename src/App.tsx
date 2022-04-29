import React, { useState } from 'react'
import Header from './components/Header'
import Pagination from './components/Pagination'
import Home from './pages/Home'
import About from './pages/About'
import Tech from './pages/Tech'

import './App.css'

function App() {
  const [activeLink, setActiveLink] = useState('home')

  function ActiveSection() {
    switch (activeLink) {
      case 'home':
        return <Home />
      case 'about':
        return <About />
      case 'tech':
        return <Tech />
      default:
        return <div>404</div>
    }
  }

  function handleChangeLink(value: string) {
    setActiveLink(value)
  }

  function handleLinkFromHeader(value: string) {
    setActiveLink(value)
  }

  return (
    <div className="App container mx-auto px-10 relative min-h-screen">
      <Header activeLink={activeLink} onHandleLink={handleLinkFromHeader} />
      <ActiveSection />
      <Pagination activeLink={activeLink} onHandleLink={handleChangeLink} />
    </div>
  )
}

export default App
