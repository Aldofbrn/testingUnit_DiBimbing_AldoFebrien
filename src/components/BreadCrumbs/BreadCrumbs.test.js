import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import BreadCrumbs from '.';

describe('BreadCrumbs component', () => {
  it('should render "Home" and breadcrumb links correctly', () => {
    // Mock the current path with multiple segments
    window.history.pushState({}, 'Test User', '/user/123/profile');

    render(
      <Router>
        <BreadCrumbs />
      </Router>
    );

    // Check if "Home" link is present
    const homeLink = screen.getByText('Home');
    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute('href', '/');

    // Check if user breadcrumb is present and correctly linked
    const userLink = screen.getByText('user');
    expect(userLink).toBeInTheDocument();
    expect(userLink).toHaveAttribute('href', '/user');

    // Check if profile breadcrumb is present and correctly linked
    const profileLink = screen.getByText('profile');
    expect(profileLink).toBeInTheDocument();
    expect(profileLink).toHaveAttribute('href', '/user/123/profile');
  });
});
