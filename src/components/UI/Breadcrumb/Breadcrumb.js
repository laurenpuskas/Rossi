import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import * as style from './style.module.scss'

const Breadcrumb = (props) => {
  const outerControls = useAnimation()
  const innerControls = useAnimation()
  const { ref, inView } = useInView({ triggerOnce: true })

  useEffect(() => {
    if (inView) {
      outerControls.start('visible')
      innerControls.start('visible')
    }
    if (!inView) {
      outerControls.start('hidden')
      innerControls.start('hidden')
    }
  }, [outerControls, inView])

  const outerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  }

  const innerVariant = {
    hidden: { maxWidth: '50%' },
    visible: {
      maxWidth: '100%',
      transition: {
        duration: 1.5,
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={outerControls}
      variants={outerVariant}
    >
      <motion.div
        className={style.breadcrumb}
        ref={ref}
        initial="hidden"
        animate={innerControls}
        variants={innerVariant}
      >
        <span>
          0{props.id}. {props.children}
        </span>
      </motion.div>
    </motion.div>
  )
}

export default Breadcrumb
