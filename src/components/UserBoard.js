import React from 'react'
import User from './User'

export default class UserBoard extends React.Component {
  render() {
    return (
      <div>
        <User name="Thels" />
        <User name="Alice" />
        <User name="Bob" />
        <User name="C." />
      </div>
    )
  }
}