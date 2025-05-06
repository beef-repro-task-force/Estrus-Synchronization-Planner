import React from 'react';
import { render, screen, within } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from './Footer';

describe('Footer Component', () => {
  it('renders help link', () => {
    render(<Footer />);
    const helpLink = screen.getByRole('link', { name: /help/i });
    expect(helpLink).toBeInTheDocument();
    expect(helpLink).toHaveAttribute('href', '/help');
  });

  it('renders reference link', () => {
    render(<Footer />);
    const referenceLink = screen.getByRole('link', { name: /reference/i });
    expect(referenceLink).toBeInTheDocument();
    expect(referenceLink).toHaveAttribute('href', '/reference');
  });

  it('renders Beef Repro Homepage link', () => {
    render(<Footer />);
    const homepageLink = screen.getByRole('link', { name: /beef repro homepage/i });
    expect(homepageLink).toBeInTheDocument();
    expect(homepageLink).toHaveAttribute('href', 'https://beefrepro.org');
  });

  it('renders social media icons with correct links', () => {
    render(<Footer />);

    const facebookLink = screen.getByRole('link', { name: /facebook/i });
    expect(facebookLink).toHaveAttribute('href', 'https://www.facebook.com/beefrepro/');

    const twitterLink = screen.getByRole('link', { name: /twitter/i });
    expect(twitterLink).toHaveAttribute('href', 'https://twitter.com/beef_repro');

    const youtubeLink = screen.getByRole('link', { name: /youtube/i });
    expect(youtubeLink).toHaveAttribute('href', 'https://www.youtube.com/channel/UCLpZWNMIXm83qfMU-kqu_uA?view_as=subscriber');
  });

  it('renders all social media icons', () => {
    render(<Footer />);
    expect(screen.getByTestId('FacebookIcon')).toBeInTheDocument();
    expect(screen.getByTestId('TwitterIcon')).toBeInTheDocument();
    expect(screen.getByTestId('YouTubeIcon')).toBeInTheDocument();
  });

  it('renders copyright text', () => {
    render(<Footer />);
    expect(screen.getByText(/copyright © 2022 beef reproduction task force/i)).toBeInTheDocument();
  });

  it('has correct background color', () => {
    render(<Footer />);
    const footer = screen.getByRole('contentinfo');
    expect(footer).toHaveStyle({ backgroundColor: '#A23A41' });
  });

  it('renders navigation links with correct styling', () => {
    render(<Footer />);
    const helpLink = screen.getByRole('link', { name: /help/i });
    const referenceLink = screen.getByRole('link', { name: /reference/i });
    const homepageLink = screen.getByRole('link', { name: /beef repro homepage/i });

    expect(helpLink).toHaveClass('link-grid-footer');
    expect(referenceLink).toHaveClass('link-grid-footer');
    expect(homepageLink).toHaveClass('link-grid-footer');
  });

  it('centers copyright text', () => {
    render(<Footer />);
    const copyright = screen.getByText(/copyright © 2022/i);
    expect(copyright).toHaveClass('copyright-footer-loc');
  });
});