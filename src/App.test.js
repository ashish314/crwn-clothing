import { render, screen } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import {store, persistor} from './pages/redux/store';

test('renders learn react link', () => {
  <Provider store={store}>
    render(<App />);
  </Provider>
  // const linkElement = screen.getByText(/a/i);
  // expect(linkElement).toBeInTheDocument();
});
