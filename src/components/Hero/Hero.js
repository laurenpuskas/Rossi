import React from 'react'

import Wrapper from '../Wrapper'
import Background from './Background'
import IntroText from './Intro'

const Hero = (props) => {
  return (
    <div className={`absolute top-0 inset-x-0`}>
      <Background
        background={props.background}
        classes={`absolute md:-top-72 3xl:-top-96 left-0 right-0`}
      />
      <div className={`absolute top-0 inset-x-0`}>
        <Wrapper classes={`mt-24 md:mt-36`}>
          <IntroText
            classes={`w-11/12 md:w-8/12 3xl:w-7/12 text-2xl md:text-5xl 3xl:text-6xl serif font-semibold`}
          >
            We build unforgettable websites for brands {`&`} creatives.
          </IntroText>
        </Wrapper>
      </div>
    </div>
  )
}

export default Hero
