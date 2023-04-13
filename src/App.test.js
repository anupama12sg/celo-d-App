// Import necessary testing libraries
import { render, screen } from '@testing-library/react';

// Import the component to be tested
import App from './App';

// Define a test case
test('renders learn react link', () => {
  // Render the App component
  render(<App />);

  // Get the element that contains the text "learn react", ignoring case
  const linkElement = screen.getByText(/learn react/i);

  // Assert that the element is present in the rendered output
  expect(linkElement).toBeInTheDocument();
});
