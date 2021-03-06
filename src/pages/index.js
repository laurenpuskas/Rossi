import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../helpers/seo'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import FAQ from '../components/FAQ'
import { getStarted, heroTitle, heroSubtitle } from '../constants/text'

class PageIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const services = data.allMdx.nodes

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={`Build Your Brand`}
          keywords={[
            `websites`,
            `branding`,
            `ecommerce`,
            `web design`,
            `react`,
          ]}
        />
        <Hero
          title={heroTitle}
          subtitle={heroSubtitle}
          buttonText={getStarted}
        />
        <About />
        {services.map((service) => {
          return (
            <Services
              key={service.frontmatter.id}
              slug={service.fields.slug}
              excerpt={service.excerpt}
              id={service.frontmatter.id}
              title={service.frontmatter.title}
              subtitle={service.frontmatter.subtitle}
              body={service.body}
              base={service.frontmatter.base.childImageSharp.fluid}
              layer1={service.frontmatter.layer1.childImageSharp.fluid}
              layer2={service.frontmatter.layer2.childImageSharp.fluid}
              layer3={service.frontmatter.layer3.childImageSharp.fluid}
            />
          )
        })}
        <FAQ />
      </Layout>
    )
  }
}

export default PageIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___id], order: ASC }) {
      nodes {
        body
        fields {
          slug
        }
        frontmatter {
          title
          subtitle
          id
          base {
            childImageSharp {
              fluid(maxWidth: 1200, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          layer1 {
            childImageSharp {
              fluid(maxWidth: 890, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          layer2 {
            childImageSharp {
              fluid(maxWidth: 890, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          layer3 {
            childImageSharp {
              fluid(maxWidth: 890, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
`
