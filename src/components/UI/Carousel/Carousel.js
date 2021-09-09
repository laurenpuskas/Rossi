import React, { Component } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default class Carousel extends Component {
  render() {
    const { children, ...props } = this.props

    const settings = {
      dots: true,
      infinite: true,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      vertical: true,
      verticalSwiping: true,
    }

    return <Slider {...settings}>{children}</Slider>
  }
}
