import React from 'react'
import Img from 'gatsby-image'

import * as style from './style.module.scss'

const Websites = (props) => {
  return (
    <div className={style.websites}>
      <div className={style.hero}>
        <div className={style.nav}>
          <div className={style.menu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className={style.logo}>{props.logo}</div>
        </div>

        <div className={style.content}>
          <div className={style.heroText}>
            <p>{props.text}</p>
            <button>View Our Work</button>
          </div>

          <div className={style.heroImg}>
            <Img fluid={props.image1} alt={props.title} />
          </div>
        </div>
      </div>

      <div className={style.images}>
        <Img fluid={props.image2} alt={props.title} className={style.image} />
        <Img fluid={props.image3} alt={props.title} className={style.image} />
        <Img fluid={props.image4} alt={props.title} className={style.image} />
        <Img fluid={props.image5} alt={props.title} className={style.image} />
      </div>
    </div>
  )
}

export default Websites
