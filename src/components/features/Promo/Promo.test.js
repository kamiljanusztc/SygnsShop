import React from 'react';
import { shallow } from 'enzyme';
import { PromoComponent } from './Promo';

describe('Component Promo', () => {
  it('should render without crashing', () => {
    const component = shallow(<PromoComponent />);
    expect(component).toBeTruthy();
  });
});
