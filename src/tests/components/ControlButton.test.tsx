import { mount } from 'enzyme';
import React from 'react';
import ControlButton from './../../components/ControlButton';
import { ControlType, icons } from './../../constants';

describe('<ControlButton />', () => {
  test('renders properly', () => {
    const actionSpy = jest.fn();
    const component = mount(<ControlButton action={actionSpy} >My Control Button</ControlButton>);
    component.simulate('click');
    expect(component).toMatchSnapshot();
    expect(actionSpy).toHaveBeenCalled();
  });

  describe('when disabled', () => {
    const actionSpy = jest.fn();
    const component = mount(<ControlButton action={actionSpy} disabled={true} >disabled</ControlButton>);

    test('click wont work and must be opaque', () => {
      component.simulate('click');
      expect(component.text()).toBe('disabled');
      expect(actionSpy).not.toHaveBeenCalled();
    });

    test('when re-enabled, click must work and be full color', () => {
      component.setProps({ disabled: false });
      component.simulate('click');
      expect(actionSpy).toHaveBeenCalledTimes(1);
    });
  });

  describe('with ControlType.NEW_GAME', () => {
    test('the icon must be the plus/new/add icon', () => {
      const actionSpy = jest.fn();
      const component = mount(<ControlButton action={actionSpy} type={ControlType.NEW_GAME}>new</ControlButton>);
      const icon = component.find('img');
      component.simulate('click');
      expect(component.text()).toBe('new');
      expect(actionSpy).toHaveBeenCalled();
      expect(icon.getElement().props.src).toBe(icons.new);
    });
  });

  describe('with ControlType.RESTART_GAME', () => {
    test('the icon must be the reload/restart icon', () => {
      const actionSpy = jest.fn();
      const component = mount(
      <ControlButton action={actionSpy} type={ControlType.RESTART_GAME} >restart</ControlButton>);
      const icon = component.find('img');
      component.simulate('click');
      expect(component.text()).toBe('restart');
      expect(actionSpy).toHaveBeenCalled();
      expect(icon.getElement().props.src).toBe(icons.refresh);
    });
  });

  describe('with ControlType.SEE_ORIGINAL', () => {
    test('the icon must be the image icon', () => {
      const actionSpy = jest.fn();
      const component = mount(
      <ControlButton action={actionSpy} type={ControlType.SEE_ORIGINAL}>see original</ControlButton>);
      const icon = component.find('img');
      component.simulate('click');
      expect(component.text()).toBe('see original');
      expect(actionSpy).toHaveBeenCalled();
      expect(icon.getElement().props.src).toBe(icons.image);
    });
  });
});
