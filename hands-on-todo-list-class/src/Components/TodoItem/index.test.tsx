import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import 'jest-styled-components';

import { TodoItem } from './index';

enum Presets {
  Delete = 'Delete',
}

describe('<TodoItem />', () => {
  it('reders components correctly.', () => {
    const { container } = render(<TodoItem label="Default TodoItem" />);

    const todoItem = screen.getByText('Default TodoItem');
    expect(todoItem).toBeInTheDocument();

    const deleteButton = screen.getByText(Presets.Delete);
    expect(deleteButton).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });

  it('is a clickable button.', () => {
    const mockClick = jest.fn();
    render(<TodoItem label="Button Test" onDelete={mockClick} />);

    const todoItemButton = screen.getByText(Presets.Delete);
    expect(mockClick).toHaveBeenCalledTimes(0);
    fireEvent.click(todoItemButton);
    expect(mockClick).toHaveBeenCalledTimes(1);
  });
});
