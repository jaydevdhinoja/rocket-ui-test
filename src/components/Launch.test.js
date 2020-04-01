import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
//import userEvent from '@testing-library/user-event'

import Launch from './Launch'

afterEach(cleanup)

describe(':: Launch ::', () => {

    test('renders Launch component', () => {

        const props = {
            flight_number: 1,
            launch :{
               launch_id: '1',
               flight_number: 1,
               rocket: {
                rocket_id: 'falcon 1'
               }
            },
            currentRocketData : {
                flight_number: 1,
                rocket_id: 'falcon 1',
                cost_per_launch: 670000,
                description: 'TEST'
            },
            setLaunchToggle : jest.fn()
        }

        // Act
        const { getByText } = render(<Launch {...props} />)

        // Assert
        //expect(getByText((content, element) => content.startsWith('Flight Number'))).toBeInTheDocument()
        expect(getByText('Flight Number:',{ exact: false })).toBeInTheDocument()
        expect(getByText('Rocket ID:', { exact: false })).toBeInTheDocument()
        expect(getByText('Cost:', { exact: false })).toBeInTheDocument()
        expect(getByText('Description:', { exact: false })).toBeInTheDocument()
    })

})