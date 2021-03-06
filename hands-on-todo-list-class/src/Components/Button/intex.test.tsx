import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import 'jest-styled-components';

import { Button } from './index';

describe('<Button />', () => {
  it('reders components correctly.', () => {
    const { container } = render(<Button label="Button Test" />);

    const buttonLabel = screen.getByText('Button Test');
    expect(buttonLabel).toBeInTheDocument();
    expect(buttonLabel).toHaveStyleRule('color', '#FFFFFF');
    expect(buttonLabel).toHaveStyleRule('font-size', '16px');

    const button = buttonLabel.parentElement;
    expect(button).toHaveStyleRule('text-align', 'center');
    expect(button).toHaveStyleRule('cursor', 'pointer');
    expect(button).toHaveStyleRule('padding', '10px 20px');
    expect(button).toHaveStyleRule('border-radius', '8px');

    const defaultBackgroundColor = '#304FFE';
    const defaultHoverColor = '#1639FE';
    expect(button).toHaveStyleRule('background-color', defaultBackgroundColor);
    expect(button).toHaveStyleRule('background-color', defaultHoverColor, { modifier: ':hover' });

    expect(container).toMatchSnapshot();
  });

  it('renders changed "backgroundColor" and "hoberColor" with Props.', () => {
    const backgroundColor = '#FF1744';
    const hoverColor = '#F01440';
    render(<Button label="Button Test" backgroundColor={backgroundColor} hoverColor={hoverColor} />);

    const button = screen.getByText('Button Test').parentElement;
    expect(button).toHaveStyleRule('background-color', backgroundColor);
    expect(button).toHaveStyleRule('background-color', hoverColor, { modifier: ':hover' });
  });

  it('is a clickable button.', () => {
    const mockClick = jest.fn();
    render(<Button label="Button Test" onClick={mockClick} />);

    const buttonLabel = screen.getByText('Button Test');
    expect(mockClick).toHaveBeenCalledTimes(0);
    fireEvent.click(buttonLabel);
    expect(mockClick).toHaveBeenCalledTimes(1);
  });
});
