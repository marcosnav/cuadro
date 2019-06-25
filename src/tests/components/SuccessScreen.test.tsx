import { mount } from 'enzyme';
import React from 'react';
import SuccessScreen from './../../components/SuccessScreen';

describe('<SuccessScreen />', () => {
  test('renders properly', () => {
    const component = mount(
    <SuccessScreen image={'/cat-image.jpg'} />);
    expect(component.text()).toBe('Well Done!');
    expect(component).toMatchSnapshot();
  });
});
