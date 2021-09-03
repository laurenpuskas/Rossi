import React from 'react'

import * as style from './style.module.scss'

const Button = (props) => {
  if (props.type === 'submit') {
    return <button type="submit">{props.label}</button>
  } else {
    return (
      <a
        href={props.href}
        className={`
          ${props.arrow ? style.arrow : ''}
          ${props.line ? style.line : ''}
          ${props.white ? style.white : props.orange ? style.orange : ''}
          ${props.className ? style.className : ''}
          ${style.button}
        `}
      >
        {props.children}
      </a>
    )
  }
}

export default Button
