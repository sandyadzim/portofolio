import React, { useState } from 'react'
import Header from './components/Header'
import Pagination from './components/Pagination'
import Home from './pages/Home'
import About from './pages/About'
import Tech from './pages/Tech'

import './App.css'
import Github from './assets/img/icons/github.svg'
import Instagram from './assets/img/icons/ig.svg'
import Linkedin from './assets/img/icons/linkedin.svg'

function App() {
  const [activeLink, setActiveLink] = useState('home')

  const socialMedia = [
    {
      img: Github,
      href: 'https://github.com/sandyadzim',
      slug: 'github',
    },
    {
      img: Instagram,
      href: 'https://www.instagram.com/rahmansyah_sandy/',
      slug: 'instagram',
    },
    {
      img: Linkedin,
      href: 'https://www.linkedin.com/in/sandy-rahmansyah-578322128/',
      slug: 'linkedin',
    },
  ]

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

      {activeLink === 'home' && (
        <div className="flex space-x-4 absolute bottom-52 md:bottom-9 left-28 md:left-0">
          {socialMedia.map((item, index) => (
            <div key={index} className="rounded-xl shadow-base p-3">
              <a href={item.href} target={'_blank'}>
                <img src={item.img} alt={item.slug} />
              </a>
            </div>
          ))}
        </div>
      )}

      <Pagination activeLink={activeLink} onHandleLink={handleChangeLink} />
    </div>
  )
}

export default App
