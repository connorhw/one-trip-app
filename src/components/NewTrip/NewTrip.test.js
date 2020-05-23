import React from 'react';
import { render } from '@testing-library/react';
import NewTrip from './NewTrip';
import { BrowserRouter } from 'react-router-dom';

test('renders NewTrip component successfully', () => {
  render(
      <BrowserRouter>
        <NewTrip />
      </BrowserRouter>
    );
});