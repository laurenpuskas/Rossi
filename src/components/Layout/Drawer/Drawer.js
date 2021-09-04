import React from 'react'

import * as style from './style.module.scss'

const Drawer = (props) => {
  return (
    <div className={`${style.drawer} ${props.open ? style.open : ''}`}>
      drawerrrrr
    </div>
  )
}

export default Drawer
