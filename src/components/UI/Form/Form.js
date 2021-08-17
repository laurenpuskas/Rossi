import React from 'react'

const Form = (props) => {
    return (
      <form name={props.name} method="POST" netlify className={props.classes}>
        {props.children}
      </form>
    )
}

export default Form
