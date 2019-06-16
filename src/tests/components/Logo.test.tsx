import { shallow } from 'enzyme';
import React from 'react';
import Logo from './../../components/Logo';
import { Status, theme } from './../../constants';

describe('<Logo/>', () => {
  test('renders properly', () => {
    const component = shallow(<Logo />);
    expect(component).toMatchSnapshot();
  });

  describe('on: Status.ERROR', () => {
    test('figure fill must be apropriate', () => {
      const component = shallow(<Logo status={Status.ERROR} />);
      const pathFills = component.find('path');
      expect(pathFills.getElements()[0].props.fill).toBe(theme.RED);
      expect(pathFills.getElements()[1].props.fill).toBe(theme.RED);
    });
  });
});
