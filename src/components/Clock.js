import React from 'react'

export default class Title extends React.Component {
  state = {}

  componentDidMount() {
    this.updateClock()
    setInterval(this.updateClock, 1)
  }

  updateClock = () => {
    const time = new Date()
    const milliseconds = this.formatNumber(time.getMilliseconds(), 3)
    const seconds = this.formatNumber(time.getSeconds(), 2)
    const minutes = this.formatNumber(time.getMinutes(), 2)
    const hours = this.formatNumber(time.getHours(), 2)
    this.setState({ milliseconds, seconds, minutes, hours })
  }

  formatNumber = (number, decimals) => {
    number = Math.floor(number).toString()
    while (number.length < decimals) {
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
      <span> . </span>
      <span id="milliseconds">{this.state.milliseconds}</span>
    </div>)
  }
}