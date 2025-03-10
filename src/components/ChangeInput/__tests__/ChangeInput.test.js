import React from 'react';
import { render, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ChangeInput from '../ChangeInput';

afterEach(cleanup);

describe('ChangeInput', () => {
  test('displays the correct greeting', () => {
    const { getByLabelText, getByTestId } = render(<ChangeInput />);
    const input = getByLabelText('user-name');
    const greeting = getByTestId('change-input-greeting');

    // Initial state
    expect(input.value).toBe('');
    expect(greeting.textContent).toBe('Welcome, Anonymous User!');

    // Type into input
    userEvent.type(input, 'John Doe');
    expect(input.value).toBe('John Doe');
    expect(greeting.textContent).toBe('Welcome, John Doe!');
  });
});