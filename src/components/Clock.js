import React from 'react'

export default class Title extends React.Component {
  state = {}

  componentDidMount() {
    this.updateClock()
    setInterval(this.updateClock, 1000)
  }

  updateClock = () => {
    const time = new Date()
    const seconds = this.formatNumber(time.getSeconds())
    const minutes = this.formatNumber(time.getMinutes())
    const hours = this.formatNumber(time.getHours())
    this.setState({ seconds, minutes, hours })
  }

  formatNumber = (number) => {
    number = Math.floor(number)
    if (number < 10) {
      number = "0".concat(number)
    }
    return number
  }

  render() {
    return (<div id="clock-container">
      <span id="hours">{this.state.hours}</span>
      <span> : </span>
      <span id="minutes">{this.state.minutes}</span>
      <span> : </span>
      <span id="seconds">{this.state.seconds}</span>
    </div>)
  }
}