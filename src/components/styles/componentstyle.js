import styled from 'styled-components'
import { Link } from 'gatsby'
import * as color from './colors'

//! LAYOUT
export const LayoutStyle = styled.div`
  display: flex;
  flex-direction: column;
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
  background-color: ${color.blue};
  div {
    height: auto;
    font-size: 0.8rem;
    display: flex;
    justify-content: center;
    padding: 15px;
    font-family: 'Roboto Mono', monospace;
    a {
      margin: 0 10px;
      color: #f4f6f6;
    }
  }
`
