import { MemoryRouter } from 'react-router';
import { render, screen } from '@testing-library/react';
import { expect } from 'vitest';
import MainPage from '~app/pages/main-page.tsx';

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
