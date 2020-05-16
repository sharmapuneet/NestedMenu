import React from 'react';
import { shallow } from 'enzyme';
import Routing from './index';

describe('Routing', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<Routing />)
    expect(wrapper).toMatchSnapshot();
  });
});