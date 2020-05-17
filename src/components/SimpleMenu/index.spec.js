import React from 'react'
import { shallow } from 'enzyme'
import SimpleMenu from './index'

describe('SimpleMenu', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<SimpleMenu />)

    expect(wrapper).toMatchSnapshot()
  })

  it('should have 15 working Links', () => {
    const wrapper = shallow(<SimpleMenu />)

    expect(wrapper.find('Link')).toHaveLength(15)
  })
})
