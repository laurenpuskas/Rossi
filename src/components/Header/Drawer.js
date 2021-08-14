import React from 'react'
import { bool } from 'prop-types'

import Menu from './Menu'
import * as styles from './style.module.scss'

const Drawer = ({ open }) => {
  return (
    <div className={styles.drawer} style={{opacity: open ? '1' : '0'}}>
      <Menu />
    </div>
  )
}

Drawer.propTypes = {
  open: bool.isRequired,
}

export default Drawer
