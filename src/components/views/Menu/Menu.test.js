import React from 'react';
import { shallow } from 'enzyme';
import { MenuComponent } from './Menu';

describe('Component Menu', () => {
  it('should render without crashing', () => {
    const component = shallow(<MenuComponent />);
    expect(component).toBeTruthy();
  });
});
