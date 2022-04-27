import React, { useState } from 'react'

interface IButton {
  onHandleSidebar: (sidebar: boolean) => void
}

function ButtonMenu(props: IButton) {
  const [sidebar, setSidebar] = useState(false)

  function handleSidebar() {
    setSidebar(!sidebar)
    props.onHandleSidebar(sidebar)
  }

  return (
    <button className="block md:hidden z-30" onClick={handleSidebar}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-navy-pastel"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </button>
  )
}

export default ButtonMenu
