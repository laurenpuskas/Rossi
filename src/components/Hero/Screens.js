import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import * as style from './style.module.scss'

const Screens = () => {
  return (
    <section>
      <StaticImage
        src="../../images/hero/screen1.png"
        className={style.screen}
      />
      <StaticImage
        src="../../images/hero/screen1.png"
        className={style.screen}
      />
    </section>
  )
}

export default Screens
