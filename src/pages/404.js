import React from 'react'

import Layout from '../components/Layout'
import SEO from '../helpers/seo'
import Page from '../components/Layout/Page'

class NotFoundPage extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <SEO title="404: Not Found" />
        <Page>
          <h1>Not Found</h1>
          <p>You just hit a route that doesn&#39;t exist.</p>
        </Page>
      </Layout>
    )
  }
}

export default NotFoundPage
