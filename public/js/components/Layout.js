import React, { PropTypes } from 'react'

import Footer from './Footer'
import Nav from './Nav'

const Layout = ({ location, children }) =>
  <div>
    <Nav location={location} />
    {children}
    <Footer />
  </div>

Layout.propTypes = {
  location: PropTypes.object.isRequired,
  children: PropTypes.element.isRequired,
}

export default Layout
