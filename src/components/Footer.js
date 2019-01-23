import React, { Component } from 'react'
import { FooterStyle, FooterLink } from '../components/styles/componentstyle'
export default class Footer extends Component {
  render() {
    return (
      <FooterStyle>
        <div>
          ©{new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby.js</a>
        </div>
      </FooterStyle>
    )
  }
}
