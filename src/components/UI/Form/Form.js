import React from 'react'

import Button from '../Button'
import * as style from './style.module.scss'

const Form = (props) => {
  return (
    <form
      name={props.name}
      method="POST"
      action="https://getform.io/f/23f13765-d671-4302-8516-4ea5378a5e8a"
      className={`${props.classes ? props.classes : ''} ${style.form}`}
    >
      {props.children}
      <Button type={`submit`} orange arrow>
        {props.send}
      </Button>
    </form>
  )
}

export default Form
