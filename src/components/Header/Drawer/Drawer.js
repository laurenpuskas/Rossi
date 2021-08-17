import React from 'react'
import { bool } from 'prop-types'

import Wrapper from '../../Wrapper'
import Menu from '../Menu'
import Form from '../../UI/Form'
import Input from '../../UI/Form/Input'
import Button from '../../UI/Button'
import * as styles from './style.module.scss'

const Drawer = (props) => {
  return (
    <div
      className={`
        ${styles.drawer}
        ${props.open ? styles.open : ''}
        fixed 
        inset-x-0 
        w-screen 
        h-full 
        z-40 
        transition-top 
        ease-in-out  
        duration-1000
      `}
    >
      <div
        className={`
        ${styles.inner} 
        bg-white
        w-full 
        h-full
        md:h-5/6
        z-40 
      `}
      >
        <Wrapper size="large" classes="grid grid-cols-2 gap-4 py-10 h-full">
          <Menu
            classes="grid"
            liClasses="py-2"
            linkClasses="text-4xl font-thin"
            open={props.open}
          />
          <Form
            name="contact"
            classes="hidden md:flex flex-col flex-wrap justify-center"
          >
            <Input type="text" name="name" label="Your Name" classes="" />
            <Input type="email" name="email" label="Email Address" classes="" />
            <Input type="textarea" name="message" label="Your Message" classes="" />
            <Button type="submit" label="Send Message" classes="" />
          </Form>
        </Wrapper>
      </div>
    </div>
  )
}

Drawer.propTypes = {
  open: bool.isRequired,
}

export default Drawer
