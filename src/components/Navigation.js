// import React from 'react'
// import PropTypes from 'prop-types'
// import { withStyles } from '@material-ui/core/styles'
// import AppBar from '@material-ui/core/AppBar'
// import Toolbar from '@material-ui/core/Toolbar'
// import { Navlink } from './styles/Allstyle'

// const styles = {
//   root: {
//     flexGrow: 1,
//   },
// }

// function SimpleAppBar(props) {
//   const { classes } = props

//   return (
//     <div className={classes.root}>
//       <AppBar position="static" color="default">
//         <Toolbar>
//           <Navlink to="/">Home</Navlink>
//           <Navlink to="/blog">blog</Navlink>
//         </Toolbar>
//       </AppBar>
//     </div>
//   )
// }

// SimpleAppBar.propTypes = {
//   classes: PropTypes.object.isRequired,
// }

// export default withStyles(styles)(SimpleAppBar)

import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { Navlink, NavStyle, Logo } from './styles/componentstyle'
import * as color from './styles/colors'

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
    <NavStyle className={classes.root}>
      <AppBar position="static" className={classes.root}>
        <Toolbar>
          <Logo>takatoshiw.</Logo>
          <Navlink to="/">| home </Navlink>
          <Navlink to="/blog">| blog</Navlink>
        </Toolbar>
      </AppBar>
    </NavStyle>
  )
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(ButtonAppBar)
