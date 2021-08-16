import React from 'react'

import links from '../../constants/links'
import './style.module.scss'

const Menu = () => {
  return (
    <ul>
      {links.map((link) => {
        return <li key={link.id}>{link.name}</li>
      })}
    </ul>
  )
}

export default Menu
