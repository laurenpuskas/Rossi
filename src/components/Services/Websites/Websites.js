import React from 'react'
import Img from 'gatsby-image'
import BackgroundImage from 'gatsby-background-image'

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

          <BackgroundImage
            Tag={`div`}
            fluid={props.image1}
            className={style.heroImg}
          />
        </div>
      </div>

      <div className={style.images}>
        <div className={style.imageWrap}>
          <Img fluid={props.image2} alt={props.title} className={style.image} />
          <Img fluid={props.image3} alt={props.title} className={style.image} />
          <Img fluid={props.image4} alt={props.title} className={style.image} />
          <Img fluid={props.image5} alt={props.title} className={style.image} />
        </div>

        <div className={style.hiddenContent}>
          <p className={style.projectTitle}>{props.projectTitle}</p>
          <div className={style.contentImages}>
            <Img
              fluid={props.postImage1}
              alt={props.title}
              className={style.contentImage}
            />
            <Img
              fluid={props.postImage2}
              alt={props.title}
              className={style.contentImage}
            />
            <Img
              fluid={props.postImage3}
              alt={props.title}
              className={style.contentImage}
            />
            <Img
              fluid={props.postImage4}
              alt={props.title}
              className={style.contentImage}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Websites
