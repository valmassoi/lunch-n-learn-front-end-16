import { renderComponent, expect } from '../test_helper'
import Home from '../../public/js/pages/Home'

describe('Home', () => {
  let component

  beforeEach(() => {
  })

  it('exists', () => {
    component = renderComponent(Home, { darkMode: 'dark-mode' })
    expect(component).to.exist
  })
})
