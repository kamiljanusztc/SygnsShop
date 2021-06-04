import React from 'react';
import { shallow } from 'enzyme';
import { CarouselComponent } from './Carousel';

describe('Component Carousel', () => {
  it('should render without crashing', () => {
    const component = shallow(<CarouselComponent />);
    expect(component).toBeTruthy();
  });
});
