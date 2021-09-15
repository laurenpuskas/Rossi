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
          ${props.line ? style.line : ''}
          ${props.white ? style.white : props.orange ? style.orange : ''}
          ${style.button} 
          button
        `}
      >
        {props.children}
        {props.arrow && (
          <div className={style.arrow}>
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 93.6 10.35"
            >
              <path
                style={{ fill: 'none' }}
                className={
                  props.white
                    ? style.fillWhite
                    : props.orange
                    ? style.fillOrange
                    : ''
                }
                d="M88.42,10l4.82-4.82 M93.25,5.18l-4.82-4.82 M93.25,5.18H0"
              />
            </svg>
          </div>
        )}
      </a>
    )
  }
}

export default Button
