import { MemoryRouter } from 'react-router';
import { render, screen } from '@testing-library/react';
import { MainPage } from '~app/pages/main-page.tsx';
import { expect } from 'vitest';

describe('MainPage', () => {
  it('should render with a header and a sign-in form', () => {
    render(
      <MemoryRouter>
        <MainPage />
      </MemoryRouter>,
    );

    expect(screen.getByTestId('main-page-header')).toBeInTheDocument();
  });
});
