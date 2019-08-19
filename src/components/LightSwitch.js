import React from 'react'

export default class LightSwitch extends React.Component {
  state = { active: true }

  toggle = () => {
    this.setState({
      active: !this.state.active
    })
  }

  render() {
    return (<div>
      <p>The light switch is <b>{this.state.active ? 'on' : 'off'}</b></p>
      <button onClick={this.toggle}>Toggle</button>
    </div>)
  }
}