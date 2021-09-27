import React from 'react'

import Button from '../Button'
import * as style from './style.module.scss'

const Form = (props) => {
  return (
    <form
      name="contact"
      method="POST"
      className={`${props.classes ? props.classes : ''} ${style.form}`}
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value={props.name} />
      {props.children}
      <Button type={`submit`} orange arrow>
        {props.send}
      </Button>
    </form>
  )
}

export default Form
