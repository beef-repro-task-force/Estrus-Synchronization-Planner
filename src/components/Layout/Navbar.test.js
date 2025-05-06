import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Navbar from './Navbar';

describe('Navbar Component', () => {
  it('renders the title text', () => {
    render(<Navbar />);
    expect(screen.getByText('Beef Reproduction Task Force')).toBeInTheDocument();
  });

  it('renders social media icons with correct links and accessible names', () => {
    render(<Navbar />);
    const facebookLink = screen.getByRole('link', { name: 'Facebook' });
    const twitterLink = screen.getByRole('link', { name: 'Twitter' });
    const youtubeLink = screen.getByRole('link', { name: 'YouTube' });

    expect(facebookLink).toHaveAttribute('href', 'https://www.facebook.com/beefrepro/');
    expect(twitterLink).toHaveAttribute('href', 'https://twitter.com/beef_repro');
    expect(youtubeLink).toHaveAttribute('href', 'https://www.youtube.com/channel/UCLpZWNMIXm83qfMU-kqu_uA?view_as=subscriber');
  });

  it('has a static AppBar', () => {
    render(<Navbar />);
    const appBar = screen.getByRole('banner');
    expect(appBar).toHaveClass('navBar-area');
  });

  it('aligns title to the left', () => {
    render(<Navbar />);
    const title = screen.getByText('Beef Reproduction Task Force');
    expect(title).toHaveClass('navbar-typo-title');
  });
});