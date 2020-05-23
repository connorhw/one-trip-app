import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Vault from './Vault';

test('renders Vault component successfully', () => {
  render(
  <BrowserRouter>
    <Vault />
  </BrowserRouter>
  );
});