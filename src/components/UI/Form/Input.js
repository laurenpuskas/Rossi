import React from 'react'

import * as style from './style.module.scss'

const Input = (props) => {
  const type =
    props.type === 'textarea' ? (
      <textarea
        name={props.name}
        className={style.textarea}
        placeholder={props.placeholder}
      ></textarea>
    ) : (
      <input
        type={props.type}
        name={props.name}
        className={style.input}
        placeholder={props.placeholder}
        required={props.required}
      />
    )

  return type
}

export default Input
