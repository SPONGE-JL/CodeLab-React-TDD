import React from 'react';

import { render, screen } from '@testing-library/react';
import App from './App';

describe('<App />', () => {
  it('renders component correctly', () => {
    const { container } = render(<App />);

    // Check Link
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();

    // Check Image Tag (App-logo)
    const appLogo = screen.getByAltText("logo");
    expect(appLogo).toBeInTheDocument();
    expect(appLogo).toHaveAttribute('src', 'logo.svg');

    // Check P Tag
    const elmByP = container.getElementsByTagName('p');
    expect(elmByP).toHaveLength(1);
    expect(elmByP[0]).toHaveTextContent('Edit src/App.tsx and save to reload');

    // Snapshot
    expect(container).toMatchSnapshot();
  });
});
