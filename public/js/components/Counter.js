import React, { Component } from 'react'

class SomeComponent extends Component {
  constructor() {
    super()
    this.state = {
      count: 0
    }
  }

  handleCountChange(delta) {
    const count = this.state.count + delta
    this.setState({ count })
  }

  render() {
    const { count } = this.state,
      color = (count > 0) ? 'green' : (count < 0) ? 'red' : ''
    return (
      <div class={`well ${color}`}>
        <h1>{count}</h1>
        <span
          class={`btn ${(count >= 0) ? 'btn-danger' : 'btn-default'}`}
          onClick={() => this.handleCountChange(-1)}
        > - </span>
        <span
          class="btn btn-info"
          onClick={() => this.handleCountChange(1)}
        > + </span>
      </div>
    )
  }
}

export default SomeComponent
