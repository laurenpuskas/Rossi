import React from 'react'

import * as style from './style.module.scss'

const Accordion = (props) => {
  return (
    <div className={style.tab}>
      <input type={`checkbox`} id={props.id} />
      <label className={style.tabLabel} for={props.id}>
        {props.label}
      </label>
      <div className={style.tabContent}>
        <p>{props.children}</p>
      </div>
    </div>
  )
}

export default Accordion
