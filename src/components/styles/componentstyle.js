import styled from 'styled-components'
import { Link } from 'gatsby'
import * as color from './colors'
import media from '../styles/media'
//! LAYOUT
export const LayoutStyle = styled.div`
  display: flex;
  flex-direction: column;
  ${media.max.small`
    overflow: hidden;
  `};
`
export const ContainerStyle = styled.div`
  margin-left: auto;
  margin-right: auto;
  min-height: calc(100vh - 112px);
  ${media.max.small`
    margin: 0 20px;
    padding: 20px;
    overflow: hidden;
  `};
`
//! HERO
export const HeroStyle = styled.div`
  margin-top: 10vh;
  .name {
    width: max-content;
    background-color: #ededed;
    font-family: monospace;
    font-size: 2rem;
    padding: 0 5px;
    z-index: 10;
    margin: 0 auto;
    margin-bottom: -40px;
  }
  .desc {
    margin-top: -50px;
    margin-left: -20px;
    line-height: 2;
    ${media.max.small`

      `};
    p {
      width: max-content;
      background-color: #ededed;
      font-family: 'Roboto Mono', monospace;
      margin-bottom: 15px;
      font-weight: bolder;
    }
  }
`

//! NAVIGATION
export const NavStyle = styled.div`
  display: flex;
  background-color: ${color.blue};
  div {
    justify-content: center;
    background-color: ${color.blue};
  }
`
export const Navlink = styled(Link)`
  color: ${color.white};
  text-decoration: none;
  padding: 5px 10px;
  margin: 0 10px;
  box-shadow: none;
  font-size: 0.8rem;
  font-family: 'Roboto Mono', monospace;
  :hover {
    background-color: ${color.green};
  }
`

//! FOOTER
export const FooterStyle = styled.div`
  min-height: 56px;
  div {
    height: auto;
    font-size: 0.8rem;
    display: flex;
    justify-content: center;
    padding: 15px;
    font-family: 'Roboto Mono', monospace;
    a {
      margin: 0 10px;
      color: ${color.blue};
    }
  }
`
