import React, { useState } from 'react'
import Header from './components/Header'
import Pagination from './components/Pagination'
import Home from './pages/Home'
import About from './pages/About'
import Tech from './pages/Tech'
import Experience from './pages/Experience'
import Project from './pages/Project'
import Contact from './pages/Contact'

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
        return <Home social={socialMedia} />
      case 'about':
        return <About />
      case 'tech':
        return <Tech />
      case 'experience':
        return <Experience />
      case 'project':
        return <Project />
      case 'contact':
        return <Contact />
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
    <div className="App">
      <div className="container mx-auto px-10 relative min-h-screen">
        <Header activeLink={activeLink} onHandleLink={handleLinkFromHeader} />

        <ActiveSection />

        {activeLink === 'home' && (
          <div className="md:flex hidden space-x-4 absolute bottom-9 left-2">
            {socialMedia.map((item, index) => (
              <div key={index} className="rounded-xl shadow-base p-3">
                <a href={item.href} target={'_blank'}>
                  <img src={item.img} alt={item.slug} />
                </a>
              </div>
            ))}
          </div>
        )}

        {activeLink !== 'contact' && activeLink !== 'project' && (
          <Pagination activeLink={activeLink} onHandleLink={handleChangeLink} />
        )}
      </div>

      {activeLink === 'contact' && (
        <div className="w-full absolute bottom-0 bg-navy-pastel p-5 text-white font-bold text-xl text-center">
          <footer>Assets from unDraw | Build with React JS</footer>
        </div>
      )}
    </div>
  )
}

export default App
