import React, { Component } from 'react'
import axios from 'axios'

class Bitcoin extends Component {
  constructor() {
    super()
    this.state = {
      btc: {},
    }
  }

  componentWillMount() {
    this.getBtcData()
  }

  getBtcData() {
    axios.get('https://crossorigin.me/https://www.bitstamp.net/api/v2/ticker/btcusd/')
      .then((res) => {
        const { data: btc } = res
        this.setState({ btc })
      })
  }

  render() {
    const { btc } = this.state
    const { high, low, last } = btc
    return (
      <div>
        <h4>High: ${high}</h4>
        <h4>Low: ${low}</h4>
        <h4>Last: ${last}</h4>
      </div>
    )
  }
}

export default Bitcoin
