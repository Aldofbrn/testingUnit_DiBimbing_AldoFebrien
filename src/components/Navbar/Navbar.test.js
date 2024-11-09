import React from 'react'; // Import React here
import { render, screen, fireEvent } from '@testing-library/react';
import Navbar from '.';
import { BrowserRouter } from 'react-router-dom';

// Mocking the localStorage to simulate a logged-in state
beforeEach(() => {
  localStorage.setItem('access_token', 'fake_token'); // Simulate logged-in state
});

afterEach(() => {
  localStorage.clear(); // Clear localStorage after each test to avoid leaks
});

test('displays LogOut button when logged in, and changes to LogIn after logout', () => {
  render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );

  // Check that the LogOut button is rendered when logged in
  const logoutButtons = screen.getAllByText(/LogOut/i);
  expect(logoutButtons.length).toBeGreaterThan(0); // Ensure at least one LogOut button exists

  // Simulate the logout by clicking the first LogOut button
  fireEvent.click(logoutButtons[0]);

  // Ensure that the access_token is removed from localStorage after logout
  expect(localStorage.getItem('access_token')).toBeNull();

  // Check that the LogIn button appears after logging out using getByRole
  const loginButton = screen.getByRole('button', { name: /LogIn/i });
  expect(loginButton).toBeInTheDocument();
});

// Test the mobile menu toggle functionality
test('toggles mobile menu visibility when the hamburger icon is clicked', () => {
  render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );

  // Ensure the mobile menu is initially hidden
  const mobileMenu = screen.getByTestId('mobile-menu');
  expect(mobileMenu).toHaveClass('translate-x-full'); // Initially hidden

  // Simulate clicking the hamburger menu icon
  const menuButton = screen.getByTestId('menu-button');
  fireEvent.click(menuButton);

  // After clicking, the mobile menu should be visible
  expect(mobileMenu).toHaveClass('translate-x-0'); // Now visible

  // Simulate clicking again to close the mobile menu
  fireEvent.click(menuButton);

  // Ensure the mobile menu is hidden again
  expect(mobileMenu).toHaveClass('translate-x-full'); // Now hidden again
});
