import { useState } from 'react'
import Header from './components/Header'
import Pagination from './components/Pagination'
import Home from './pages/Home'

import logo from './logo.svg'
import './App.css'

function App() {
  const [activeLink, setActiveLink] = useState('home')

  function ActiveSection() {
    switch (activeLink) {
      case 'home':
        return <Home />
      default:
        return <div>404</div>
    }
  }

  return (
    <div className="App container mx-auto px-10 relative min-h-screen">
      <Header activeLink={activeLink} />
      <ActiveSection />
      <Pagination />
    </div>
  )
}

export default App
