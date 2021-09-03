import React from 'react'

import * as style from './style.module.scss'

const Logo = (props) => {
  return (
    <div
      className={`${style.logo} ${
        props.orange ? style.orange : props.white ? style.white : ''
      } ${props.className ? props.className : ''}`}
    >
      {props.children}
    </div>
  )
}

export default Logo
