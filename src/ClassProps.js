import React, { Component } from 'react'

export default class ClassProps extends Component {
  render() {
    return (
      <div>
        <h1>I am a class component</h1>
        <p>{this.props.children}</p>
      </div>
    )
  }
}
