import React from 'react'

import Form from '../components/UI/Form'
import Input from '../components/UI/Form/Input'
import Button from '../components/UI/Button'

import Layout from '../components/Layout'
import SEO from '../helpers/seo'

class ContactPage extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <SEO title="Contact Us" />
        <Form
          name="contact"
          classes="hidden md:flex flex-col flex-wrap justify-center"
        >
          <Input type="text" name="name" label="Your Name" classes="" />
          <Input type="email" name="email" label="Email Address" classes="" />
          <Input
            type="textarea"
            name="message"
            label="Your Message"
            classes=""
          />
          <Button type="submit" label="Send Message" classes="" />
        </Form>
      </Layout>
    )
  }
}

export default ContactPage
