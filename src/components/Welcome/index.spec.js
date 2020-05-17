import React from 'react'
import { shallow, render } from 'enzyme'
import Welcome from './index'

describe('Welcome', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<Welcome />)

    expect(wrapper).toMatchSnapshot()
  })

  it('should have text', () => {
    const wrapper = render(<Welcome />)

    expect(wrapper.text()).toBe('Welcome to Nested Menu.This project is made to show how we can make Nested menu with unlimited nested menu items.')
  })
})
