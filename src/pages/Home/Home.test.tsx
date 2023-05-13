import { describe, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';

import Home from '.';
import { fileExtensionConfig } from '../../utils/constants';

// TODO: Test case review
describe('Home is mounted', () => {
   beforeEach(() => {
      render(<Home setRoute={vi.fn()} />, { wrapper: BrowserRouter });
   });

   it('Action hint is mounted', async () => {
      const hint = await screen.findByTestId('nav-hint');
      expect(hint).toBeInTheDocument;
   });

   it('Category buttons are mounted', () => {
      const buttonGroup = screen.queryAllByRole('button', { hidden: true });
      expect(buttonGroup).toHaveLength(Object.keys(fileExtensionConfig).length);
   });
});

describe('Buttons onClick event', () => {
   it('Click category buttons', async () => {
      const setRoute = vi.fn((route: string) => {});
      const user = userEvent.setup();
      const routeCount = vi.spyOn(user, 'click');
      render(<Home setRoute={setRoute} />, { wrapper: BrowserRouter });

      const catButtons = await screen.findAllByTestId('category-btn');
      catButtons.forEach(async (button, index) => {
         await user.click(button);
         expect(button).toHaveTextContent(
            fileExtensionConfig[Object.keys(fileExtensionConfig)[index]]
               .category
         );
         const text = button.textContent?.toLowerCase() || '';
         expect(setRoute).toHaveBeenCalledWith(`/${text}`);
      });

      expect(routeCount).toHaveBeenCalledTimes(catButtons.length);
   });
});
