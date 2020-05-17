import React from 'react'
import { shallow, render } from 'enzyme'
import Message from './index'

describe('Message', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<Message />)

    expect(wrapper).toMatchSnapshot();
  })

  it('should have text', () => {
    const wrapper = render(<Message />)

    expect(wrapper.text()).toBe('This menu item has not been enabled yet.')
  })
})
