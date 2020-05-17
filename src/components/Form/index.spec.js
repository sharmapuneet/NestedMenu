import React from 'react'
import { mount, shallow, render } from 'enzyme'
import Form from './index'

describe('Form', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<Form />)

    expect(wrapper).toMatchSnapshot()
  })

  it('should have two textfields', () => {
    const wrapper = render(<Form />)

    expect(wrapper.find('input')).toHaveLength(2)
  })
})
