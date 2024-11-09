import React from 'react'; // Import React here
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Register from '.';
import axios from 'axios';
import { MemoryRouter } from 'react-router-dom';

// Mock the axios POST request
jest.mock('axios');

describe('Register Page', () => {
  it('renders the form correctly', () => {
    render(
      <MemoryRouter>
        <Register />
      </MemoryRouter>
    );

    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
    expect(screen.getByText('Register')).toBeInTheDocument();
  });

  it('shows error when email or password is empty', () => {
    render(
      <MemoryRouter>
        <Register />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByText('Register'));

    expect(
      screen.getByText('Email and password are required')
    ).toBeInTheDocument();
  });

  it('shows error for invalid email format', () => {
    render(
      <MemoryRouter>
        <Register />
      </MemoryRouter>
    );

    fireEvent.change(screen.getByPlaceholderText('Email'), {
      target: { value: 'invalid-email' },
    });
    fireEvent.change(screen.getByPlaceholderText('Password'), {
      target: { value: 'password123' },
    });

    fireEvent.click(screen.getByText('Register'));

    expect(screen.getByText('Please enter a valid email')).toBeInTheDocument();
  });

  it('submits the form successfully and navigates to login', async () => {
    axios.post.mockResolvedValueOnce({ data: { id: 1, token: '123' } });

    render(
      <MemoryRouter>
        <Register />
      </MemoryRouter>
    );

    fireEvent.change(screen.getByPlaceholderText('Email'), {
      target: { value: 'test@example.com' },
    });
    fireEvent.change(screen.getByPlaceholderText('Password'), {
      target: { value: 'password123' },
    });

    fireEvent.click(screen.getByText('Register'));

    await waitFor(() => expect(axios.post).toHaveBeenCalledTimes(1));

    expect(axios.post).toHaveBeenCalledWith('https://reqres.in/api/register', {
      email: 'test@example.com',
      password: 'password123',
    });

    // Mock the useNavigate to check for redirection
    const navigate = jest.fn();
    expect(navigate).toHaveBeenCalledWith('/login');
  });

  it('displays an error message when the API call fails', async () => {
    axios.post.mockRejectedValueOnce({
      response: {
        data: {
          error: 'Something went wrong',
        },
      },
    });

    render(
      <MemoryRouter>
        <Register />
      </MemoryRouter>
    );

    fireEvent.change(screen.getByPlaceholderText('Email'), {
      target: { value: 'test@example.com' },
    });
    fireEvent.change(screen.getByPlaceholderText('Password'), {
      target: { value: 'password123' },
    });

    fireEvent.click(screen.getByText('Register'));

    await waitFor(() =>
      expect(screen.getByText('Something went wrong')).toBeInTheDocument()
    );
  });
});
