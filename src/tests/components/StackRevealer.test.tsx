import { mount } from 'enzyme';
import React from 'react';
import { act } from 'react-dom/test-utils';
import StackRevealer from './../../components/StackRevealer';

describe('<StackRevealer/>', () => {
  const component = mount(<StackRevealer show={false}>{[(<div key='1'/>), (<div key='2'/>)]}</StackRevealer>);

  test('renders properly', () => {
    const revealers = component.find('Revealer');
    expect(revealers.length).toBe(2);
    expect(revealers.first().props().show).toBe(false);
    expect(revealers.first().props().direction).toBe('UP');
    expect(component).toMatchSnapshot();
  });

  test('show: true', () => {
    jest.useFakeTimers();

    act(() => {
      component.setProps({ show: true });
    });

    // Initial Render
    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 400);
    component.update();
    let revealers = component.find('Revealer');
    expect(revealers.first().props().show).toBe(false);
    expect(revealers.last().props().show).toBe(false);

    // First timer
    act(() => {
      jest.advanceTimersByTime(400);
    });
    expect(setTimeout).toHaveBeenCalledTimes(2);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 400);
    component.update();
    revealers = component.find('Revealer');
    expect(revealers.first().props().show).toBe(true);
    expect(revealers.last().props().show).toBe(false);

    // Second timer
    act(() => {
      jest.advanceTimersByTime(400);
    });
    expect(setTimeout).toHaveBeenCalledTimes(3);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 400);
    component.update();
    revealers = component.find('Revealer');
    expect(revealers.first().props().show).toBe(true);
    expect(revealers.last().props().show).toBe(true);
  });
});
