import React from 'react'

const Form = (props) => {
    return (
      <form
        name={props.name}
        method="POST"
        className={props.classes}
        data-netlify="true"
      >
        {props.children}
      </form>
    )
}

export default Form
