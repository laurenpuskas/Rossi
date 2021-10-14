import React from 'react'
import Img from 'gatsby-image'

import * as style from './style.module.scss'

const Block = (props) => {
  return (
    <div className={style.post}>
      <Img fluid={props.image} alt={props.title} />
      <h4>{props.title}</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vehicula
        tellus eget arcu tincidunt, eu feugiat mi rutrum. Sed at turpis
        imperdiet.
      </p>
    </div>
  )
}

export default Block
