import React from 'react'

export default class User extends React.Component {
  state = { present: true }

  toggle = () => {
    this.setState({
      present: !this.state.present
    })
  }

  render() {
    return (<div>
      <p>User: <b>{this.props.name}</b></p>
      <p>{this.props.name} is <b>{this.state.present ? '' : 'not '}</b>present.</p>
      <button onClick={this.toggle}>Toggle</button>
    </div>)
  }
}