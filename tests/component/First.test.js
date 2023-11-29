import renderer from 'react-test-renderer';
import React from 'react';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import { renderHook, act } from '@testing-library/react-hooks'
import renderWithProviders, { setupStore } from '../utils/test-utils';
// Importing the jest testing library
//import '@testing-library/jest-dom'
import First from '../../src/app/component/First';

// afterEach function runs after each test suite is executed
afterEach(() => {
  cleanup(); // Resets the DOM after each test suite
});
jest.mock('react-router-dom', () => ({
  Link: ({ children }) => <div>{children}</div>,
}));

test('should increment counter', () => {
	const {container, getByText} = renderWithProviders(<First />)
   
	
	})
