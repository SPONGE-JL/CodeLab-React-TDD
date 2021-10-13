import { render, screen } from '@testing-library/react';
import App from './App';

// [Memo] initial react test format
test('renders learn react link', () => {
  render(<App />); // [Memo] render: react components on screen
  const linkElement = screen.getByText(/learn react/i); // [Memo] screen: the react-components has been rendered on
  expect(linkElement).toBeInTheDocument(); // [Memo] toBeInTheDocument: check target has been rendered in DOM
});

// [Memo] Test App component (jest style)
describe('<App />', () => {
  it('renders component correctly', () => {
    // Check Link
    const { container } = render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();

    // Check Image Tag
    const elmByClass_AppLogo = container.getElementsByClassName('App-logo');
    expect(elmByClass_AppLogo).toHaveLength(1);
    expect(elmByClass_AppLogo[0]).toHaveAttribute('src', 'logo.svg');

    // Check P Tag
    const elmByP = container.getElementsByTagName('p');
    expect(elmByP).toHaveLength(1);
    expect(elmByP[0]).toHaveTextContent('Edit src/App.js and save to reload');

    // Snapshot
    expect(container).toMatchSnapshot();
  });
});
