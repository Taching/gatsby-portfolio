import React, { Component } from 'react'
import { Link } from 'gatsby'
export default class Navigation extends Component {
  render() {
    return (
      <div>
        <ul>
          <Link to={`/`}>HOME</Link>
        </ul>
      </div>
    )
  }
}
