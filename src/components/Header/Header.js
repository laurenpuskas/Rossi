import React, { useState } from 'react'

import Logo from './Logo'
import Button from './Button'
import Drawer from './Drawer'
import * as styles from './style.module.scss'

const Header = () => {
    const [open, setOpen] = useState(false);

    return (
      <div className={`container flex flex-row justify-end mx-auto px-4 md:px-8 py-3 md:py-8 ${styles.header}`}>
        <Logo />
        <Button open={open} setOpen={setOpen} />
        <Drawer open={open} />
      </div>
    )
}

export default Header
