import React, { useState, useEffect } from 'react'

import arrowLeft from '../../assets/img/icons/arrow-left.svg'
import arrowRight from '../../assets/img/icons/arrow-right.svg'

interface IPagination {
  activeLink: string
  onHandleLink: (link: string) => void
}

function Pagination({ activeLink, onHandleLink }: IPagination) {
  const [active, setActive] = useState(activeLink)

  useEffect(() => {
    setActive(activeLink)
  }, [activeLink])

  useEffect(() => {
    onHandleLink(active)
  }, [active])

  function nextPage(currentLink: string): void {
    switch (currentLink) {
      case 'home':
        setActive('about')
        break
      case 'about':
        setActive('tech')
        break
      case 'tech':
        setActive('experience')
        break
      case 'experience':
        setActive('project')
        break
      case 'project':
        setActive('contact')
        break
      default:
        setActive('home')
    }
  }

  function prevPage(currentLink: string) {
    switch (currentLink) {
      case 'contact':
        setActive('project')
        break
      case 'project':
        setActive('experience')
        break
      case 'experience':
        setActive('tech')
        break
      case 'tech':
        setActive('about')
        break
      case 'about':
        setActive('home')
        break
      default:
        setActive('contact')
    }
  }

  return (
    <div className="absolute bottom-9 right-3 md:right-2">
      <div className="space-x-6">
        <button
          onClick={() => prevPage(activeLink)}
          className="px-6 py-7 bg-white rounded-[50%] shadow-base"
        >
          <img src={arrowLeft} alt="arrow-left" className="w-6 md:w-8" />
        </button>
        <button
          onClick={() => nextPage(activeLink)}
          className="px-6 py-7 bg-green-pastel rounded-[50%] shadow-base"
        >
          <img src={arrowRight} alt="arrow-right" className="w-6 md:w-8" />
        </button>
      </div>
    </div>
  )
}

export default Pagination
