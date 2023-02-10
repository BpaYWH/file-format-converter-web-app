import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';
import AnimatedRoutes from '.';

describe('test is title rendered', () => {
    it('App title is rendered', () => {
        render(
            <MemoryRouter initialEntries={['/', '/image', '/image/jpeg']}>
                <AnimatedRoutes />
            </MemoryRouter>
        )
        const title = screen.findByText('File Converter');
        expect(title).toBeInTheDocument;
    });
});