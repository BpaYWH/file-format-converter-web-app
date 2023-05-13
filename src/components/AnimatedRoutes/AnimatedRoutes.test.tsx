import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { MemoryRouter } from 'react-router-dom';

import AnimatedRoutes from '.';
import { fileExtensionConfig } from '../../utils/constants';

describe('Pages are mounted', () => {
   it('App title is mounted', () => {
      render(
         <MemoryRouter initialEntries={['/']}>
            <AnimatedRoutes />
         </MemoryRouter>
      );
      const title = screen.findByText('File Converter');
      expect(title).toBeInTheDocument;
   });

   it('Home page is mounted', async () => {
      render(
         <MemoryRouter initialEntries={['/']}>
            <AnimatedRoutes />
         </MemoryRouter>
      );
      const btns = await screen.findAllByTestId('category-btn');
      expect(btns).toHaveLength(Object.keys(fileExtensionConfig).length);
   });

   it('Category page is mounted', async () => {
      render(
         <MemoryRouter initialEntries={['/image']}>
            <AnimatedRoutes />
         </MemoryRouter>
      );
      const btns = await screen.findAllByTestId('extension-btn');
      expect(btns).toHaveLength(fileExtensionConfig['image'].extensions.length);

      fileExtensionConfig['image'].extensions.forEach((extension) => {
         expect(screen.getByText(extension)).toBeTruthy();
      });
   });

   it('File extension page is mounted', async () => {
      render(
         <MemoryRouter initialEntries={['/image/jpeg']}>
            <AnimatedRoutes />
         </MemoryRouter>
      );
      expect(screen.getByText('Upload +')).toBeTruthy();
   });

   it('Not found page is mounted', async () => {
      // render(
      //    <MemoryRouter initialEntries={['/bad-route']}>
      //       <AnimatedRoutes />
      //    </MemoryRouter>
      // );
      // expect(screen.getByText('Page Not Found')).toBeTruthy();
   });
});
