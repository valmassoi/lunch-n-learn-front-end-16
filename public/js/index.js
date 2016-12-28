import React from 'react'
import ReactDOM from 'react-dom'
import { Router, browserHistory } from 'react-router'

import routes from './routes'

// File is larger with Redux
const app = document.getElementById('app')

ReactDOM.render(
  <Router history={browserHistory} routes={routes} />
  , app
)
