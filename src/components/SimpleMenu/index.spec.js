import React from 'react';
import { shallow, render } from 'enzyme';
import SimpleMenu from './index';

describe('SimpleMenu', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<SimpleMenu />)
    expect(wrapper).toMatchSnapshot();
  });

  it('should have two textfields', () => {
    const wrapper = shallow(<SimpleMenu />)
    expect(wrapper.find('Link')).toHaveLength(14);
  });
});