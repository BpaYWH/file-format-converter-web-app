import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';
import Home from '.';

describe('Home', () => {
   it('Renders properly', () => {
      render(
         <MemoryRouter initialEntries={['/']}>
            <Home />
         </MemoryRouter>
      );
   });
});