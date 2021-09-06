import React from 'react'

import * as style from './style.module.scss'

const Breadcrumb = (props) => {
  return (
    <div className={style.breadcrumb}>
      <span>
        0{props.id}. {props.children}
      </span>
    </div>
  )
}

export default Breadcrumb
