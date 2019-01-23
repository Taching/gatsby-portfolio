import React, { Component } from 'react'
import { Link } from 'gatsby'

export default class Navigation extends Component {
  render() {
    return (
      <div>
        <ul>
          <Link to={`/`}>HOME</Link>
        </ul>
        <div class="ui secondary menu">
          <a class="item">
            <Link to={`/`}>HOME</Link>
          </a>
          <a class="item">Messages</a>
          <a class="item">Friends</a>
        </div>
      </div>
    )
  }
}
