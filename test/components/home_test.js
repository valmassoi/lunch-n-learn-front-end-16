import { renderComponent, expect } from '../test_helper'
import Home from '../../public/js/pages/Home'

describe('Home', () => {

  it('has correct class', () => {
    const component = renderComponent(Home, { })
    expect(component).to.have.class('home')
  })
})
