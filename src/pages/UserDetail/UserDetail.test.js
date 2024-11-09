import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import axios from 'axios';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import UsersDetail from '.'; // Adjust the path if necessary

// Mock axios to avoid real API calls during tests
jest.mock('axios');

describe('UsersDetail', () => {
  it('renders loading state initially', () => {
    render(
      <MemoryRouter initialEntries={['/users-detail/1']}>
        <Routes>
          <Route path="/users-detail/:id" element={<UsersDetail />} />
        </Routes>
      </MemoryRouter>
    );

    // Check if the component renders the title or loading state
    expect(screen.getByText('Welcome to User Detail')).toBeInTheDocument();
  });

  it('fetches and displays user details', async () => {
    // Mock the axios.get to simulate a successful response
    axios.get.mockResolvedValueOnce({
      data: {
        data: {
          id: 1,
          first_name: 'John',
          last_name: 'Doe',
          email: 'john.doe@example.com',
          avatar: 'https://reqres.in/img/faces/1-image.jpg',
        },
      },
    });

    render(
      <MemoryRouter initialEntries={['/users-detail/1']}>
        <Routes>
          <Route path="/users-detail/:id" element={<UsersDetail />} />
        </Routes>
      </MemoryRouter>
    );

    // Wait for the user details to be loaded and rendered
    await waitFor(() => screen.getByText("Hello! 😄 I'm John Doe"));

    // Assert that the user details are rendered correctly
    expect(screen.getByText('ID Number: 1')).toBeInTheDocument();
    expect(screen.getByText("Hello! 😄 I'm John Doe")).toBeInTheDocument();
    expect(screen.getByText('john.doe@example.com')).toBeInTheDocument();
    expect(screen.getByAltText('User Avatar')).toHaveAttribute(
      'src',
      'https://reqres.in/img/faces/1-image.jpg'
    );
  });

  it('displays error message if API call fails', async () => {
    // Mock the axios.get to simulate a failed response
    axios.get.mockRejectedValueOnce(new Error('Failed to fetch user'));

    render(
      <MemoryRouter initialEntries={['/users-detail/1']}>
        <Routes>
          <Route path="/users-detail/:id" element={<UsersDetail />} />
        </Routes>
      </MemoryRouter>
    );

    // Wait for the error message to appear
    await waitFor(() => screen.getByText(/Failed to fetch user/i));

    // Assert that an error message or fallback UI appears
    expect(screen.getByText(/Failed to fetch user/i)).toBeInTheDocument();
  });
});
