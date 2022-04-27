import React from 'react'

interface IMenu {
  title: string
  slug: string
}

interface IListMenu {
  menus: Array<IMenu>
  activeLink: string
}

function ListMenu(props: IListMenu) {
  return (
    <ul className="list-nav">
      {props.menus.map((item) => (
        <li key={item.slug}>
          <button
            className={`link-nav ${
              props.activeLink === item.slug ? 'active-link' : ''
            }`}
          >
            {item.title}
          </button>
        </li>
      ))}
    </ul>
  )
}

export default ListMenu
