import React from 'react'

import Layout from '../components/Layout'
import SEO from '../helpers/seo'
import Page from '../components/Layout/Page'

class SuccessPage extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <SEO title="Thank you!" />
        <Page>
          <h1>Thank you!</h1>
          <p>We've received your message and will be in touch shortly.</p>
        </Page>
      </Layout>
    )
  }
}

export default SuccessPage
