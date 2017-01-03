import React, { Component } from 'react'

import Counter from '../components/Counter'
import SomeComponent from '../components/SomeComponent'

class Home extends Component {

  constructor(props) {
    super(props)
    this.state = {

    }
  }

  componentWillMount() {
    console.warn('home cwm')
  }

  render() {
    return (
      <div class="form-container centered">
        <SomeComponent title="Hello World" />
        <Counter />
      </div>
    )
  }
}


export default Home
