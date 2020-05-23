import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Nav from './Nav';

test('renders Nav component successfully', () => {
  render(
  <BrowserRouter>
    <Nav />
  </BrowserRouter>
  );
});