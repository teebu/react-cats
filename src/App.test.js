import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import './__mocks__/intersectionObserverMock' //# observer errors if not mocking this "observer.disconnect is not a function"

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Meowz!/i);
  expect(linkElement).toBeInTheDocument();
});