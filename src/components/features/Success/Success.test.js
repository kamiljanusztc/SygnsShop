import React from 'react';
import { shallow } from 'enzyme';
import { SuccessComponent } from './Success';

describe('Component Success', () => {
  it('should render without crashing', () => {
    const component = shallow(<SuccessComponent />);
    expect(component).toBeTruthy();
  });
});
