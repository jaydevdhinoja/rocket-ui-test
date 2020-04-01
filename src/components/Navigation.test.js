import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
//import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router';

import Navigation from './Navigation';

afterEach(cleanup)

describe(':: Navigation ::', () => {

    test('renders Navigation component', () => {

        // Act
        const { getByText } = render(<MemoryRouter><Navigation/></MemoryRouter>)

        // Assert
        expect(getByText('Launches',{ exact: false })).toBeInTheDocument()

    })

})