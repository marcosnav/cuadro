import { mount } from 'enzyme';
import React from 'react';
import SuccessScreen from './../../components/SuccessScreen';

describe('<SuccessScreen />', () => {
  test('renders properly', () => {
    const component = mount(
    <SuccessScreen author={'John Doe'} image={'/cat-image.jpg'} creditsUrl={'https://john-doe.com'} />);
    expect(component.text()).toBe('Well Done!Picture by John Doe');
    expect(component).toMatchSnapshot();
  });
});
