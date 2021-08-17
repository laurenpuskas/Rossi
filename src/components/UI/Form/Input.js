import React from 'react'

const Input = (props) => {
  const type =
    props.type === 'text' || 'email' ? (
      <input type={props.type} name={props.name} />
    ) : (
      <textarea name={props.name} />
    )

  return (
    <div className={props.classes}>
      {props.label && <label htmlFor={props.name}>{props.label}</label>}
      {type}
    </div>
  )
}

export default Input
