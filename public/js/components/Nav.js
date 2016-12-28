import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Nav extends Component {
  constructor() {
    super()
    this.state = {
      collapsed: true,
    }
  }

  componentWillMount() {

  }

  componentWillUnmount() {

  }

  toggleCollapse() {
    const collapsed = !this.state.collapsed
    this.setState({ collapsed })
  }
  setCollapsed() {
    this.setState({ collapsed: true })
  }

  renderLinks() {
    return [
      <li key={1}><Link to="/404" onClick={this.setCollapsed.bind(this)}>Tab1</Link></li>,
      <li key={2}><Link to="/404" onClick={this.setCollapsed.bind(this)}>Tab2</Link></li>,
      <li key={3}><Link to="/404" onClick={this.setCollapsed.bind(this)}>Tab3</Link></li>,
    ]
  }

  render() {
    const { collapsed } = this.state
    const homeClass = location.pathname === '/' ? 'active' : ''
    const navClass = collapsed ? 'collapse' : ''

    return (
      <nav class="navbar navbar-default">
        <div class="container-fluid">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle" onClick={this.toggleCollapse.bind(this)}>
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <Link to="/" class="navbar-brand" onClick={this.setCollapsed.bind(this)}>
              Logo
            </Link>
          </div>
          <div class={`navbar-collapse ${navClass}`}>
            <ul class="nav navbar-nav navbar-right">
              {this.renderLinks()}
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}
