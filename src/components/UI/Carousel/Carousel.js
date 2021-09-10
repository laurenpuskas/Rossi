import React, { Component } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import * as style from './style.module.scss'

export default class Carousel extends Component {
  render() {
    const { children, ...props } = this.props
    let sliderClass = style.slider
    if (!props.isEven) {
      sliderClass = style.sliderReverse
    }
    let dotsClass = style.dots
    if (!props.isEven) {
      dotsClass = style.dotsReverse
    }

    const settings = {
      dots: true,
      infinite: true,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 4000,
      fade: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      vertical: true,
      verticalSwiping: true,
      className: sliderClass,
      dotsClass: dotsClass,
    }

    return <Slider {...settings}>{children}</Slider>
  }
}
