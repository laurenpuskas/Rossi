import React from 'react'
import Moment from 'react-moment'
import 'moment-timezone'

import * as styles from './style.module.scss'

const Contact = (props) => {
  return (
    <div className={`
      ${styles.contact} 
      ${props.classes ? props.classes : null} 
      ${props.open ? 'opacity-1' : 'opacity-0'}
    `}>
      <p className="serif text-sm tracking-widest uppercase font-semibold mb-2 md:mb-5">
        Contact Us
      </p>
      <p className="text-2xl md:text-4xl mb-8">info@madebyrossi.com</p>
      <p className={`w5/5 md:w-3/5 mb-4`}>
        Lorem ipsum dolor sit amet, consectetur <em>adipiscing elit</em>.
        Aliquam et odio magna.
      </p>
      <div className={`text-sm mb-10 md:mb-2`}>
        <em>Current time:</em> <Moment tz="America/Texas" format="LT"></Moment>
      </div>
    </div>
  )
}

export default Contact
