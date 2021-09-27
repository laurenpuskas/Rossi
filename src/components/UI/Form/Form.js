import React from 'react'

import Button from '../Button'
import * as style from './style.module.scss'

const Form = (props) => {
  return (
    <form
      name="contact"
      method="POST"
      action="https://getform.io/f/23f13765-d671-4302-8516-4ea5378a5e8a"
    >
      <input type="text" name="name" placeholder="Type your name" />
      <input type="email" name="email" placeholder="Type your email" />
      <button type="submit">Send</button>
    </form>
  )
}

export default Form
