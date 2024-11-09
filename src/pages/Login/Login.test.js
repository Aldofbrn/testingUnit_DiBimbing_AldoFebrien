import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Login from '.'; // Adjust path if needed
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';

// Mocking the axios post method
jest.mock('axios');

// Mock the useNavigate hook from react-router-dom
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

beforeEach(() => {
  axios.post.mockResolvedValue({ data: { token: 'fake_token' } }); // Mock successful login response
});

afterEach(() => {
  jest.clearAllMocks(); // Clear mocks after each test
});

test('displays login success message after successful login and navigates to homepage', async () => {
  const navigate = require('react-router-dom').useNavigate(); // Access the mocked navigate function

  render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );

  // Check if Login button exists
  const loginButton = screen.getByRole('button', { name: /Login/i });
  expect(loginButton).toBeInTheDocument();

  // Simulate typing email and password
  fireEvent.change(screen.getByPlaceholderText(/Your Email/i), {
    target: { value: 'test@example.com' },
  });
  fireEvent.change(screen.getByPlaceholderText(/Your Password/i), {
    target: { value: 'password123' },
  });

  // Simulate clicking the Login button
  fireEvent.click(loginButton);

  // Wait for the success message to appear (or redirection to home page)
  await waitFor(() => {
    const successMessage = screen.getByText(/LOGIN SUCCESS/i);
    expect(successMessage).toBeInTheDocument();
  });

  // Ensure the localStorage token is set (mocked in axios response)
  expect(localStorage.getItem('access_token')).toBe('fake_token');

  // Assert that the navigate function was called with '/'
  expect(navigate).toHaveBeenCalledWith('/');
});

test('displays error message on login failure', async () => {
  // Mocking the axios post method to simulate failure
  axios.post.mockRejectedValueOnce({
    response: { data: { error: 'Invalid credentials' } },
  });

  render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );

  // Check if Login button exists
  const loginButton = screen.getByRole('button', { name: /Login/i });
  expect(loginButton).toBeInTheDocument();

  // Simulate typing email and password
  fireEvent.change(screen.getByPlaceholderText(/Your Email/i), {
    target: { value: 'wrong@example.com' },
  });
  fireEvent.change(screen.getByPlaceholderText(/Your Password/i), {
    target: { value: 'wrongpassword' },
  });

  // Simulate clicking the Login button
  fireEvent.click(loginButton);

  // Wait for the error message to appear
  await waitFor(() => {
    const errorMessage = screen.getByText(/Invalid credentials/i);
    expect(errorMessage).toBeInTheDocument();
  });
});

test('should toggle password visibility when checkbox is clicked', () => {
  render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );

  // Initially, the password input should be of type 'password'
  const passwordInput = screen.getByPlaceholderText(/Your Password/i);
  expect(passwordInput.type).toBe('password');

  // Click the checkbox to show the password
  const checkbox = screen.getByLabelText(/Show Password/i); // Adjust if label is different
  fireEvent.click(checkbox);

  // After clicking, the input type should change to 'text'
  expect(passwordInput.type).toBe('text');

  // Click the checkbox again to hide the password
  fireEvent.click(checkbox);

  // After clicking again, the input type should change back to 'password'
  expect(passwordInput.type).toBe('password');
});
