import { test  } from '@playwright/experimental-ct-react';
import App from './App';

test('renders', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
