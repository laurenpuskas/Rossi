import React from 'react'

import links from '../../constants/links'
import * as style from './style.module.scss'

const Menu = (props) => {
  return (
    <ul className={style.nav}>
      {links.map((link, index) => {
        return (
          <li key={index}>
            <a
              href={link.path}
              className={
                props.white ? style.white : props.orange ? style.orange : ''
              }
            >
              {link.name}
            </a>
          </li>
        )
      })}
    </ul>
  )
}

export default Menu
