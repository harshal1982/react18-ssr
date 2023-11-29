import renderer from 'react-test-renderer';
import React from 'react';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import { renderHook, act } from '@testing-library/react-hooks'

// Importing the jest testing library
//import '@testing-library/jest-dom'
import UseStateUseEffect from '../../src/app/component/UseStateUseEffect';

// afterEach function runs after each test suite is executed
afterEach(() => {
  cleanup(); // Resets the DOM after each test suite
});
jest.mock('react-router-dom', () => ({
  Link: ({ children }) => <div>{children}</div>,
}));

test('UseStateUseEffect Component', () => {
  const setStateMock = jest.fn();
  const useSateMock = (useState) => [useState, setStateMock];

  jest.spyOn(React, 'useState').mockImplementation(useSateMock);
  const component = renderer.create(<UseStateUseEffect />);
  let tree = component.toJSON();

  
});


test('should increment counter', () => {
  const {container, getByText} = render(<UseStateUseEffect />)
 
  const button = container.firstChild;
  fireEvent.click(button);
  fireEvent.click(getByText(/Add/i));
  fireEvent.click(getByText(/Blue/i));
  const beneficiaryValue = container.querySelector("#fortesting");
  fireEvent.change(beneficiaryValue, {
	target: { value: "Changed Value" }
  });
  })