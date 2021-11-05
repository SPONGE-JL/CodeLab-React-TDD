import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import 'jest-styled-components';

import { Input } from './index';

describe('<Input />', () => {
  it('reders components correctly.', () => {
    const { container } = render(<Input value="This is an input tag." />);

    const input = screen.getByDisplayValue('This is an input tag.');
    expect(input).toBeInTheDocument();

    expect(input).toMatchSnapshot();
  });

  it('renders with a specific placeholder.', () => {
    const { container } = render(<Input placeholder="Please something to insert" />);

    const input = screen.getByPlaceholderText('Please something to insert') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'Yeah-!' } });
    expect(input.value).toBe('Yeah-!');
  });
});
