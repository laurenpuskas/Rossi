import React from 'react'

import * as style from './style.module.scss'

const Accordion = (props) => {
  return <div className={style.tabs}>{props.children}</div>
}

export default Accordion
