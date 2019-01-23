import styled from 'styled-components'
import { Link } from 'gatsby'
import * as color from './colors'

export const NavStyle = styled.div`
  display: flex;
`
export const Navlink = styled(Link)`
  color: ${color.white};
  text-decoration: none;
  margin: 10px 10px;
  box-shadow: none;
`
export const Logo = styled.span`
  color: ${color.white};
  font-family: 'Courier New', Courier, monospace;
`
