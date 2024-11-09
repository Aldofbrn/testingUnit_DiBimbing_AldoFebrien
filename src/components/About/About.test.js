import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; // To test navigation with <Link>
import About from '.'; // Adjust path if needed

describe('About Component', () => {
  it('renders the About section correctly', () => {
    render(
      <MemoryRouter>
        <About />
      </MemoryRouter>
    );

    // Check if the heading is rendered
    expect(
      screen.getByText(/Bridging Ideas and Experiences/)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/About R.Cress: Innovation Unleashed/)
    ).toBeInTheDocument();

    // Check if the description paragraph is rendered
    expect(
      screen.getByText(
        /R.Cress is dedicated to empowering individuals and businesses/
      )
    ).toBeInTheDocument();

    // Check if the image is rendered with the correct alt text
    const image = screen.getByAltText('discussion');
    expect(image).toBeInTheDocument();
    expect(image.src).toContain('undraw_engineering_team_a7n2.svg');

    // Check if the button is rendered with the correct text
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Discover more');
  });

  it('navigates to the /users-list page when "Discover more" is clicked', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <About />
      </MemoryRouter>
    );

    // Find the button and click on it
    const button = screen.getByText('Discover more');
    fireEvent.click(button);

    // Assert that the navigation happens (it should navigate to /users-list)
    expect(window.location.pathname).toBe('/users-list');
  });
});
