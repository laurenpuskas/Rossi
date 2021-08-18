import React from 'react'

import * as styles from './style.module.scss'

const Intro = (props) => {
    return (
        <div className={`${props.classes ? props.classes : null}`}>
            {props.children}
        </div>
    )
}

export default Intro
