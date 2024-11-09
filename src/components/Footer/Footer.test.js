import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '.'; // Adjust the path if necessary
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';
import { GiAerialSignal } from 'react-icons/gi';

describe('Footer Component', () => {
  it('renders the footer static content correctly', () => {
    render(<Footer />);

    // Check if the title 'R.Cress' is displayed
    expect(screen.getByText(/R\.Cress/)).toBeInTheDocument();
    expect(screen.getByText(/Lorem, ipsum dolor sit amet/)).toBeInTheDocument();

    // Check if the social media icons are displayed
    expect(screen.getByRole('img', { name: /facebook/i })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /instagram/i })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /twitter/i })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /github/i })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /dribbble/i })).toBeInTheDocument();

    // Check if the footer sections (Solutions, Support, Company, Legal) are rendered
    expect(screen.getByText(/Solutions/)).toBeInTheDocument();
    expect(screen.getByText(/Support/)).toBeInTheDocument();
    expect(screen.getByText(/Company/)).toBeInTheDocument();
    expect(screen.getByText(/Legal/)).toBeInTheDocument();
  });

  it('displays the correct social media icons', () => {
    render(<Footer />);

    // Check if each social media icon is rendered correctly
    const fbIcon = screen.getByRole('img', { name: /facebook/i });
    const igIcon = screen.getByRole('img', { name: /instagram/i });
    const twitterIcon = screen.getByRole('img', { name: /twitter/i });
    const githubIcon = screen.getByRole('img', { name: /github/i });
    const dribbbleIcon = screen.getByRole('img', { name: /dribbble/i });

    // Assert that each icon is displayed
    expect(fbIcon).toBeInTheDocument();
    expect(igIcon).toBeInTheDocument();
    expect(twitterIcon).toBeInTheDocument();
    expect(githubIcon).toBeInTheDocument();
    expect(dribbbleIcon).toBeInTheDocument();
  });

  it('displays correct footer sections and their content', () => {
    render(<Footer />);

    // Check if the Solutions section has the correct links
    expect(screen.getByText(/Analytics/)).toBeInTheDocument();
    expect(screen.getByText(/Marketing/)).toBeInTheDocument();
    expect(screen.getByText(/Commerce/)).toBeInTheDocument();
    expect(screen.getByText(/Insights/)).toBeInTheDocument();

    // Check if the Support section has the correct links
    expect(screen.getByText(/Pricing/)).toBeInTheDocument();
    expect(screen.getByText(/Documentation/)).toBeInTheDocument();
    expect(screen.getByText(/Guides/)).toBeInTheDocument();
    expect(screen.getByText(/API Status/)).toBeInTheDocument();

    // Check if the Company section has the correct links
    expect(screen.getByText(/About/)).toBeInTheDocument();
    expect(screen.getByText(/Blog/)).toBeInTheDocument();
    expect(screen.getByText(/Jobs/)).toBeInTheDocument();
    expect(screen.getByText(/Press/)).toBeInTheDocument();
    expect(screen.getByText(/Careers/)).toBeInTheDocument();

    // Check if the Legal section has the correct links
    expect(screen.getByText(/Claim/)).toBeInTheDocument();
    expect(screen.getByText(/Policy/)).toBeInTheDocument();
    expect(screen.getByText(/Terms/)).toBeInTheDocument();
  });
});
