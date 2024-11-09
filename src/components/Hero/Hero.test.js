import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Hero from '.'; // Adjust path if necessary

jest.mock('react-typed', () => ({
  ReactTyped: ({ strings }) => <div>{strings.join(', ')}</div>, // Mock ReactTyped for testing purposes
}));

describe('Hero Component', () => {
  it('renders static content correctly', () => {
    render(
      <MemoryRouter>
        <Hero />
      </MemoryRouter>
    );

    // Check if the heading text is rendered correctly
    expect(
      screen.getByText(/Unlock possibilities with R.Cress/)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Empowering Connectivity, Redefining Excellence/)
    ).toBeInTheDocument();
    expect(screen.getByText(/Fast, flexible learning for/)).toBeInTheDocument();
    expect(
      screen.getByText(/R.Cress is dedicated to enhancing your online journey/)
    ).toBeInTheDocument();
  });

  it('renders dynamic typed content from ReactTyped', () => {
    render(
      <MemoryRouter>
        <Hero />
      </MemoryRouter>
    );

    // Check if the ReactTyped component text is rendered correctly (mocked content)
    expect(
      screen.getByText('Everyone, Professionals, Success, Growth, Tomorrow')
    ).toBeInTheDocument();
  });

  it('navigates to the /users-list page when "Get Started" button is clicked', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Hero />
      </MemoryRouter>
    );

    // Find the button and click on it
    const button = screen.getByText('Get Started');
    fireEvent.click(button);

    // Assert that the navigation happens (it should navigate to /users-list)
    expect(window.location.pathname).toBe('/users-list');
  });
});
