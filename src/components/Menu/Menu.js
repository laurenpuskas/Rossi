import React from 'react'
import scrollTo from 'gatsby-plugin-smoothscroll'

import links from '../../constants/links'
import * as style from './style.module.scss'

const Menu = (props) => {
  return (
    <>
      <ul className={style.nav}>
        {links.map((link, index) => {
          return (
            <li key={index}>
              <a
                onClick={() => scrollTo(link.path)}
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

      <div
        className={`${style.menu} ${props.open ? style.open : ''}`}
        onClick={() => props.setOpen(!props.open)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </>
  )
}

export default Menu
