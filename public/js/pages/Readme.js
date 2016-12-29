import React, { Component } from 'react'
import axios from 'axios'
import { MarkdownPreview } from 'react-marked-markdown'

class Readme extends Component {

  constructor(props) {
    super(props)
    this.state = {
      readmeFile: '#### Loading...',
    }
  }
  componentWillMount() {
    const url = 'https://raw.githubusercontent.com/valmassoi/lunch-n-learn-front-end-16/master/README.md'
    axios.get(url)
      .then((res) => {
        this.setState({ readmeFile: res.data })
      })
  }
  render() {
    return (
      <div class="well well-lg centered" style={{ margin: '15px', minWidth: '300px' }}>
        <MarkdownPreview value={this.state.readmeFile} />
      </div>
    )
  }
}

export default Readme
