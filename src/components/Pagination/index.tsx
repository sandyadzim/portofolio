import React, { useState } from 'react'

import arrowLeft from '../../assets/img/icons/arrow-left.svg'
import arrowRight from '../../assets/img/icons/arrow-right.svg'

interface IPagination {
  activeLink: string
  onHandleLink: (link: string) => void
}

function Pagination({ activeLink, onHandleLink }: IPagination) {
  function nextPage(currentLink: string): void {
    switch (currentLink) {
      case 'home':
        onHandleLink('about')
        break
      case 'about':
        onHandleLink('tech')
        break
      default:
        onHandleLink('home')
    }
  }

  function prevPage(currentLink: string) {
    switch (currentLink) {
      case 'tech':
        onHandleLink('about')
        break
      case 'about':
        onHandleLink('home')
        break
      default:
        onHandleLink('tech')
    }
  }

  return (
    <div className="absolute bottom-9 right-3 md:right-0">
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
