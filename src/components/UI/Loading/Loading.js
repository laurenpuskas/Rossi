import React from 'react'
import { motion } from 'framer-motion'

import * as style from './style.module.scss'

const Loading = (props) => {
  return (
    <motion.div
      className={style.loading}
      animate={{
        opacity: ['0%', '100%', '100%', '0%', '0%'],
        x: ['0%', '0%', '0%', '0%', '-100%'],
      }}
      transition={{
        duration: 8,
        ease: 'easeInOut',
        times: [0, 0.2, 0.8, 0.9, 1],
        loop: false,
      }}
    >
      <motion.h1
        className={style.title}
        animate={{
          opacity: ['0%', '100%'],
        }}
        transition={{
          delay: 1,
          duration: 1.5,
          ease: 'easeInOut',
          times: [0, 1],
          loop: false,
        }}
      >
        <motion.span
          animate={{
            color: ['#2f2f2f', '#fff'],
          }}
          transition={{
            delay: 2.5,
            duration: 2,
            ease: 'easeInOut',
            times: [0, 1],
            loop: false,
          }}
        >
          {props.title}
        </motion.span>
      </motion.h1>
    </motion.div>
  )
}

export default Loading
