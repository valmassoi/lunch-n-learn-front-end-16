import React from 'react'
import { Route, IndexRoute } from 'react-router'

import Home from './pages/Home'
import Layout from './components/Layout'
import NotFound from './pages/NotFound'
import Success from './pages/Success'

export default (
  <Route path="/" component={Layout}>
    <IndexRoute component={Home} />
    <Route path="success" component={Success} />
    <Route path="*" component={NotFound} />
  </Route>
)
