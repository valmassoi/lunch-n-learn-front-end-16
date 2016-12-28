import React, { Component } from 'react'


class Home extends Component {

  constructor(props) {
    super(props)
    this.state = {
      // stepNumber: 1,
    }
  }

  componentWillMount() {
    console.warn('home cwm')
  }

  render() {
    return (
      <div>

      </div>
    )
  }
}


export default Home
