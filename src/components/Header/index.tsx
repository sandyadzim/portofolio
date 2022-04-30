import React, { useState } from 'react'
import ListMenu from './ListMenu'
import './index.scss'
import ButtonMenu from './ButtonMenu'

interface IHeaderProps {
  activeLink: string
  onHandleLink: (link: string) => void
}

function Header(props: IHeaderProps) {
  const [listLink, setListLink] = useState([
    {
      title: 'Home',
      slug: 'home',
    },
    {
      title: 'About',
      slug: 'about',
    },
    {
      title: 'Technology',
      slug: 'tech',
    },
    {
      title: 'Experience',
      slug: 'experience',
    },
    {
      title: 'Project',
      slug: 'project',
    },
    {
      title: 'Contact',
      slug: 'contact',
    },
  ])

  const [sidebar, setSidebar] = useState(false)

  function handleSidebar() {
    setSidebar(!sidebar)
  }

  function handleLink(value: string) {
    handleSidebar()
    props.onHandleLink(value)
  }

  return (
    <>
      <div>
        <header className="h-16 w-full">
          <nav className="h-full flex justify-end">
            {/* Desktop */}
            <div className="hidden md:w-full md:justify-center lg:w-auto lg:mr-10 xl:mr-0 md:flex">
              <ListMenu
                activeLink={props.activeLink}
                menus={listLink}
                onHandleLink={handleLink}
              />
            </div>

            {/* Mobile */}
            <ButtonMenu onHandleSidebar={handleSidebar} />
            <div
              className={`bg-white/70 backdrop-blur-xl fixed items-center justify-center flex-col inset-0 z-20 md:hidden ${
                sidebar ? 'flex' : 'hidden'
              }`}
            >
              <ListMenu
                activeLink={props.activeLink}
                menus={listLink}
                onHandleLink={handleLink}
              />
            </div>
          </nav>
        </header>
      </div>
    </>
  )
}

export default Header
