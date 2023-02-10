import { describe, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, BrowserRouter } from 'react-router-dom';

import Home from '.';
import AnimatedRoutes from '../../components/AnimatedRoutes';
import { fileExtensionConfig } from '../../utils/constants';

describe('test is Home rendered', () => {
   it('Action hint is rendered', () => {
      render(
         <MemoryRouter initialEntries={['/']}>
            <Home />
         </MemoryRouter>
      );
      const hint = screen.findByTestId('nav-hint');
      expect(hint).toBeInTheDocument;
   });

   it('Category buttons are rendered', () => {
      render(
         <MemoryRouter initialEntries={['/']}>
            <Home />
         </MemoryRouter>
      );
      const buttonGroup = screen.queryAllByRole('button', { hidden: true });
      expect(buttonGroup).toHaveLength(Object.keys(fileExtensionConfig).length);
   });
});

describe('test buttons can route', () => {
   it('click button to navigate to category page', async () => {
      render(
         <BrowserRouter>
            <AnimatedRoutes />
         </BrowserRouter>
      );
      const user = userEvent.setup();
      const routeCount = vi.spyOn(user, 'click');
      const catButton = screen.getAllByRole('button');

      userEvent.click(catButton[0]);

      expect(routeCount).toHaveBeenCalledWith('/image');
      expect(routeCount).toHaveBeenCalledTimes(1);
   });
});