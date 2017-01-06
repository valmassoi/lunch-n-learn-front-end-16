import React, { Component } from 'react'

import Bitcoin from '../components/Bitcoin'
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
      <div class="form-container centered home">
        <SomeComponent title="Hello World" />
        {/* <Counter /> */}
        {/* <Bitcoin /> */}
      </div>
    )
  }
}


export default Home
