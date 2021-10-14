import React from 'react'
import Img from 'gatsby-image'

import * as style from './style.module.scss'

const Block = (props) => {
  let className = ''

  if (props.id === '1') {
    className = style.post1
  } else if (props.id === '2') {
    className = style.post2
  } else if (props.id === '3') {
    className = style.post3
  } else if (props.id === '4') {
    className = style.post4
  } else if (props.id === '5') {
    className = style.post5
  } else if (props.id === '6') {
    className = style.post6
  } else {
    className = style.post0
  }

  return (
    <div className={`${className} ${style.post}`}>
      <Img fluid={props.image} alt={props.title} />
      <p>{props.date}</p>
      <h4>{props.title}</h4>
      <div className={style.button}>Read More</div>
    </div>
  )
}

export default Block
