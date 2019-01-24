import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import Image from 'gatsby-image'
import { HeroStyle } from '../components/styles/componentstyle'

function Hero() {
  return (
    <StaticQuery
      query={heroQuery}
      render={data => {
        return (
          <HeroStyle>
            <div className="name">
              <p>Takatoshi Wada</p>
            </div>
            <Image
              style={{ zIndex: `-10` }}
              fixed={data.avatar.childImageSharp.fixed}
            />
            <div className="desc">
              <p>frontend developer</p>
              <p>
                Loves music!, <Link to="/blog">I write blog</Link>
              </p>
              <p>calisthenics freak and more!</p>
            </div>
          </HeroStyle>
        )
      }}
    />
  )
}

const heroQuery = graphql`
  query HeroQuery {
    avatar: file(absolutePath: { regex: "/hero-S.jpg/" }) {
      childImageSharp {
        fixed(width: 500, height: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default Hero
