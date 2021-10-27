import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('<App />', () => {
  it('correctly renders components', () => {
    const { container } = render(<App />);

    const AppLink = screen.getByText(/learn react/i);
    expect(AppLink).toBeInTheDocument();

    const AppLogo = screen.getByAltText('AppLogo');
    expect(AppLogo).toBeInTheDocument();
    expect(AppLogo).toHaveAttribute('src', 'logo.svg');

    const pElements = container.getElementsByTagName('p');
    expect(pElements).toHaveLength(1);
    expect(pElements[0]).toHaveTextContent('Edit src/App.tsx and save to reload.');

    expect(container).toMatchSnapshot();
  });
});
