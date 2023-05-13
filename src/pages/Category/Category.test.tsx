import { describe, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';

import Category from '.';
import { fileExtensionConfig } from '../../utils/constants';

const routerSetup = () => {
   const initialRoute = `/${Object.keys(fileExtensionConfig)[0]}`;
   const router = createMemoryRouter(
      [
         {
            path: '/:category',
            element: <Category />
         }
      ],
      {
         initialEntries: [initialRoute]
      }
   );

   render(<RouterProvider router={router} />);
   return router;
};

beforeEach(() => {
   routerSetup();
});

describe('Category is mounted', () => {
   it('Action hint is mounted', async () => {
      const hint = await screen.findByTestId('nav-hint');
      expect(hint).toBeInTheDocument;
   });

   it('Extension buttons are mounted', async () => {
      const extButtons = await screen.findAllByTestId('extension-btn');
      expect(extButtons).toHaveLength(
         fileExtensionConfig[Object.keys(fileExtensionConfig)[0]].extensions
            .length
      );
   });

   it('Back button is mounted', async () => {
      const backButton = await screen.findByText('Back');
      expect(backButton).toBeInTheDocument;
   });

   it('Pagination is mounted conditionally', async () => {
      // TODO: how to check every category pages
   });

   it('Extension buttons are mounted after page changed', async () => {
      // TODO: check extension button text
   });
});

describe('Buttons onclick event', () => {
   it('Click extension buttons', async () => {
      const user = userEvent.setup();
      const clickCount = vi.spyOn(user, 'click');

      const extensionBts = await screen.findAllByTestId('extension-btn');
      await extensionBts.forEach((extBtn) => {
         user.click(extBtn);
      });

      expect(clickCount).toHaveBeenCalledTimes(extensionBts.length);
   });

   it('Click back button', async () => {
      const user = userEvent.setup();
      const clickCount = vi.spyOn(user, 'click');

      const backBtn = await screen.findByText('Back');
      await user.click(backBtn);

      expect(clickCount).toHaveBeenCalledTimes(1);
   });
});
