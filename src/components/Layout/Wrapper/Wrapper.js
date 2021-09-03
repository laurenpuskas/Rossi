import React from 'react'

import * as style from './style.module.scss'

const Wrapper = (props) => {
  return (
    <div
      className={`${style.wrapper} ${props.className ? props.className : ''}`}
    >
      {props.children}
    </div>
  )
}

export default Wrapper
