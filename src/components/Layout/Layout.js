import React from 'react'
import { motion } from 'framer-motion'

import Loading from '../UI/Loading'
import Header from './Header'
import * as style from './style.module.scss'

const Layout = ({ children }) => {
  return (
    <>
      <Loading title="Rossi." />
      <motion.div
        className={style.content}
        animate={{
          opacity: ['0%', '100%'],
        }}
        transition={{
          duration: 8,
          ease: 'easeInOut',
          times: [0, 1],
          loop: false,
        }}
      >
        <Header />
        <div className={style.children}>{children}</div>
      </motion.div>
    </>
  )
}

export default Layout
