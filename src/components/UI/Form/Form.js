import React from 'react'

const Form = (props) => {
    return (
      <form
        name={props.name}
        method="POST"
        className={`${props.classes} w-full`}
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value={props.name} />
        {props.children}
      </form>
    )
}

export default Form
