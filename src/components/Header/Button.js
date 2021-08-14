import React from 'react'
import { bool, func } from 'prop-types'

import './style.module.scss'

const Button = ({ open, setOpen }) => {
    return (
      <div open={open} onClick={() => setOpen(!open)}>
        {open ? 'Close' : 'Button'}
      </div>
    )
}

Button.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
}

export default Button
