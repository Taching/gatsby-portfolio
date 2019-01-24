import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { Navlink, NavStyle, Logo } from './styles/componentstyle'

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
}

function ButtonAppBar(props) {
  const { classes } = props
  return (
    <NavStyle>
      <AppBar position="static">
        <Toolbar className={classes.root}>
          {/* <Logo>takatoshiw.</Logo> */}
          <Navlink to="/">HOME </Navlink>
          <Navlink to="/blog">BLOG</Navlink>
          <Navlink to="/">ABOUT ME</Navlink>
          <Navlink to="/">MORE</Navlink>
        </Toolbar>
      </AppBar>
    </NavStyle>
  )
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(ButtonAppBar)
