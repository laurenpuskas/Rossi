import React from 'react'

import Button from '../Button'
import * as style from './style.module.scss'

const Form = (props) => {
  return (
    <form name="contact" method="POST" data-netlify="true">
      <input type="hidden" name="form-name" value="contact" />
      <input type="email" name="email" placeholder="Type your email" />
      <button type="submit">Send</button>
    </form>
  )
}

export default Form
