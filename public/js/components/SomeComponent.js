import React, { Component } from 'react'

class SomeComponent extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  render() {
// style={{ color:this.props.color }}
    return (
      <div>
        {this.props.title}
      </div>
    )
  }
}

export default SomeComponent
