import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';

// Mock the image import
jest.mock('../../imgs/brtf_full-color.png', () => 'brtf_full-color.png');

describe('Header Component', () => {
  const renderWithRouter = (component) => {
    return render(
      <BrowserRouter>
        {component}
      </BrowserRouter>
    );
  };

  it('renders the logo image', () => {
    renderWithRouter(<Header />);
    const logo = screen.getByRole('img', { name: /moo/i });
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('src', 'brtf_full-color.png');
  });

  it('wraps logo in a link to home', () => {
    renderWithRouter(<Header />);
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/');
  });

  it('has correct background color', () => {
    renderWithRouter(<Header />);
    const header = screen.getByRole('banner');
    expect(header).toHaveStyle({ backgroundColor: '#eeeeee' });
  });

  it('has correct CSS class', () => {
    renderWithRouter(<Header />);
    const header = screen.getByRole('banner');
    expect(header).toHaveClass('logo-header');
  });
});