import React from 'react'
import Img from 'gatsby-image'

import * as style from './style.module.scss'

const Block = (props) => {
  let className = ''

  if (props.id === '1') {
    className = style.post2
  } else if (props.id === '2') {
    className = style.post3
  } else if (props.id === '3') {
    className = style.post4
  } else {
    className = style.post1
  }

  return (
    <div className={`${className} ${style.post}`}>
      <section>
        <Img fluid={props.image} alt={props.title} />
      </section>

      <section>
        <p className={style.date}>{props.date}</p>
        <h4>{props.title}</h4>
        <p className={style.button}>Read More</p>
      </section>
    </div>
  )
}

export default Block
