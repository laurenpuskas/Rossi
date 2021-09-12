import React from 'react'

import * as style from './style.module.scss'

const Item = ({ label, isCollapsed, handleClick, children }) => {
  return (
    <>
      <button className={style.button} onClick={handleClick}>
        {label}
      </button>
      <div
        className={`
          ${style.item} 
          ${isCollapsed ? style.collapsed : style.expanded}
        `}
        aria-expanded={isCollapsed}
      >
        <p>{children}</p>
      </div>
    </>
  )
}

export default Item
