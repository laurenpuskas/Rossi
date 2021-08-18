import React from 'react'

const Input = (props) => {
  const type =
    props.type === 'text' || 'email' ? (
      <input
        type={props.type}
        name={props.name}
        className={`border-b border-dark p-1 mb-5`}
      />
    ) : (
      <textarea name={props.name} />
    )

  return (
    <>
      {type}
      {props.label && (
        <label htmlFor={props.name}>
          {props.label}
        </label>
      )}
    </>
  )
}

export default Input
