import React from 'react';
import { render, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FocusInput from '../FocusInput';

afterEach(cleanup);

describe('FocusInput', () => {
  test('matches snapshot', () => {
    const { container } = render(<FocusInput />);
    expect(container.firstChild).toMatchSnapshot();
  });

  test('focuses input when button is clicked', async () => {
    const { getByPlaceholderText, getByText } = render(<FocusInput />);
    
    userEvent.click(getByText('Click to Focus'));
    expect(document.activeElement).toBe(getByPlaceholderText('Focus me!'));
  });
});