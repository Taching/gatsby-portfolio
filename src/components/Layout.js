import React from 'react'
import Navigation from '../components/Navigation'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import { rhythm, scale } from '../utils/typography'
import {
  LayoutStyle,
  ContainerStyle,
} from '../components/styles/componentstyle'
class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    // if (location.pathname === rootPath) {
    //   header = (
    //     <h1
    //       style={{
    //         ...scale(1.5),
    //         marginBottom: rhythm(1.5),
    //         marginTop: 0,
    //       }}
    //     >
    //       <Link
    //         style={{
    //           boxShadow: `none`,
    //           textDecoration: `none`,
    //           color: `inherit`,
    //         }}
    //         to={`/`}
    //       >
    //         {title}
    //       </Link>
    //     </h1>
    //   )
    // } else {
    //   header = (
    //     <h3
    //       style={{
    //         fontFamily: `Montserrat, sans-serif`,
    //         marginTop: 0,
    //       }}
    //     >
    //       <Link
    //         style={{
    //           boxShadow: `none`,
    //           textDecoration: `none`,
    //           color: `inherit`,
    //         }}
    //         to={`/`}
    //       >
    //         {title}
    //       </Link>
    //     </h3>
    //   )
    // }

    return (
      <LayoutStyle>
        <Navigation />
        <ContainerStyle
          style={{
            maxWidth: rhythm(24),
            padding: `${rhythm(0.1)} ${rhythm(3 / 4)}`,
            boxShadow: `none`,
          }}
        >
          {children}
        </ContainerStyle>
        <Footer />
      </LayoutStyle>
    )
  }
}

export default Layout
