import React from 'react'
import { createPortal } from 'react-dom'

import * as style from './style.module.scss'

const Modal = (props) => {
  return createPortal(
    <div className={style.background}>
      <div className={style.modal}>
        <button type="button" className={style.button} onClick={props.onClick}>
          <svg
            width="23"
            height="23"
            viewBox="0 0 23 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="6.77124"
              y="4.71405"
              width="16"
              height="2.66667"
              transform="rotate(45 6.77124 4.71405)"
              fill="#615E5A"
            />
            <rect
              x="18.0848"
              y="6.59967"
              width="16"
              height="2.66667"
              transform="rotate(135 18.0848 6.59967)"
              fill="#615E5A"
            />
          </svg>
        </button>

        <h3>{props.title}</h3>
        <p>{props.subtitle}</p>
        {props.children}
      </div>
    </div>,
    document.getElementById('portal')
  )
}

export default Modal
