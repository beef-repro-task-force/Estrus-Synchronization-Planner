import React from 'react';
import { render, screen, waitFor, cleanup } from '@testing-library/react';
import { BrowserRouter, MemoryRouter, Routes, Route } from 'react-router-dom';
import App from './App';

// Mock child components
jest.mock('./components/Layout/Header', () => {
  return function MockHeader() {
    return <div data-testid="header">Header</div>;
  };
});

jest.mock('./components/Layout/Navbar', () => {
  return function MockNavbar() {
    return <div data-testid="navbar">Navbar</div>;
  };
});

jest.mock('./components/Layout/Footer', () => {
  return function MockFooter() {
    return <div data-testid="footer">Footer</div>;
  };
});

jest.mock('./pages/Home', () => {
  return function MockHome() {
    return <div data-testid="home-page">Home Page</div>;
  };
});

jest.mock('./pages/Admin', () => {
  return function MockAdmin() {
    return <div data-testid="admin-page">Admin Page</div>;
  };
});

describe('App Component', () => {
  afterEach(cleanup);

  const renderWithRouter = (ui, { route = '/' } = {}) => {
    return render(
      <MemoryRouter initialEntries={[route]}>
        {ui}
      </MemoryRouter>
    );
  };

  describe('Layout Components', () => {
    it('renders header component', () => {
      renderWithRouter(<App />);
      expect(screen.getByTestId('header')).toBeInTheDocument();
    });

    it('renders navbar component', () => {
      renderWithRouter(<App />);
      expect(screen.getByTestId('navbar')).toBeInTheDocument();
    });

    it('renders footer component', () => {
      renderWithRouter(<App />);
      expect(screen.getByTestId('footer')).toBeInTheDocument();
    });
  });

  describe('Routing', () => {
    it('renders home page on root route', () => {
      renderWithRouter(<App />);
      expect(screen.getByTestId('home-page')).toBeInTheDocument();
    });

    it('renders admin page on /admin route', () => {
      renderWithRouter(<App />, { route: '/admin' });
      expect(screen.getByTestId('admin-page')).toBeInTheDocument();
    });

    it('renders home page on invalid routes', () => {
      renderWithRouter(<App />, { route: '/invalid-route' });
      expect(screen.getByTestId('home-page')).toBeInTheDocument();
    });
  });

  describe('Component Integration', () => {
    it('maintains layout components when switching routes', () => {
      const { unmount } = renderWithRouter(<App />);

      // Check initial components
      expect(screen.getByTestId('header')).toBeInTheDocument();
      expect(screen.getByTestId('navbar')).toBeInTheDocument();
      expect(screen.getByTestId('footer')).toBeInTheDocument();
      expect(screen.getByTestId('home-page')).toBeInTheDocument();

      // Clean up the first render
      unmount();

      // Re-render with admin route
      renderWithRouter(<App />, { route: '/admin' });

      expect(screen.getByTestId('admin-page')).toBeInTheDocument();
      expect(screen.getByTestId('header')).toBeInTheDocument();
      expect(screen.getByTestId('navbar')).toBeInTheDocument();
      expect(screen.getByTestId('footer')).toBeInTheDocument();
    });
  });
});