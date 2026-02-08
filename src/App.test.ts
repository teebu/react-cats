import { render } from '@testing-library/react';
import App from './App';
import './__mocks__/intersectionObserverMock'; //# observer errors if not mocking this "observer.disconnect is not a function"

test('expect to pass', () => {
  expect(true).toBeTruthy();
});

test('renders Meow!', () => {
  const { getByText } = render(<App />);
  const ele = getByText(/Meow!/i);
  expect(ele).toBeInTheDocument();
});

test('renders React Cats', () => {
  const { getByText } = render(<App />);
  const ele = getByText(/React Cats/i);
  expect(ele).toBeInTheDocument();
});
