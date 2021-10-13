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
    const elemByClass_AppLogo = container.getElementsByClassName('App-logo');
    expect(elemByClass_AppLogo).toHaveLength(1);
    expect(elemByClass_AppLogo[0]).toHaveAttribute('src', 'logo.svg');

    // Check P Tag
    const elmByP = container.getElementsByTagName('p');
    expect(elmByP).toHaveLength(1);
    expect(elmByP[0]).toHaveTextContent('Edit src/App.js and save to reload');

    // Snapshot
    expect(container).toMatchSnapshot();
  });
});
