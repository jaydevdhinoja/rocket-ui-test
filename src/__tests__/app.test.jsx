import React from 'react';
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux'
import Routes from '../routes';
import store from '../stores/Root';

afterEach(cleanup)

function renderWithRedux(
  ui,
  { initialState } = {}
) {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    store,
  }
}

describe('app', () => {
  test('renders without crashing', () => {
    const { getByText }  = renderWithRedux(<Routes />);
    expect(getByText('SpaceX', {exact: false})).toBeInTheDocument()
  });
});
