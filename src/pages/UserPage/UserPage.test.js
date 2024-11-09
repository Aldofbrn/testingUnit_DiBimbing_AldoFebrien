import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import UserPage from '.'; // Adjust path if needed
import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';

// Mock axios
jest.mock('axios');

// Sample mock data
const mockUsers = {
  data: {
    data: [
      {
        id: 1,
        first_name: 'John',
        last_name: 'Doe',
        email: 'john.doe@example.com',
        avatar: 'avatar1.jpg',
      },
      {
        id: 2,
        first_name: 'Jane',
        last_name: 'Doe',
        email: 'jane.doe@example.com',
        avatar: 'avatar2.jpg',
      },
    ],
    page: 1,
    per_page: 6,
    total: 10,
    total_pages: 2,
  },
};

beforeEach(() => {
  // Mock successful response for fetching users
  axios.get.mockResolvedValue({ data: mockUsers.data });

  // Mock delete response
  axios.delete.mockResolvedValue({ status: 200 });
});

afterEach(() => {
  jest.clearAllMocks();
});

test('renders user list correctly', async () => {
  render(
    <BrowserRouter>
      <UserPage />
    </BrowserRouter>
  );

  // Wait for users to be fetched and rendered
  await waitFor(() => screen.getByText(/John Doe/i));

  // Check if users are rendered
  expect(screen.getByText('John Doe')).toBeInTheDocument();
  expect(screen.getByText('Jane Doe')).toBeInTheDocument();
});

test('filters users based on search', async () => {
  render(
    <BrowserRouter>
      <UserPage />
    </BrowserRouter>
  );

  // Wait for users to be fetched and rendered
  await waitFor(() => screen.getByText(/John Doe/i));

  // Simulate search input
  fireEvent.change(screen.getByPlaceholderText(/Search by first name/i), {
    target: { value: 'Jane' },
  });

  // Check if filtered results are displayed
  expect(screen.getByText('Jane Doe')).toBeInTheDocument();
  expect(screen.queryByText('John Doe')).not.toBeInTheDocument();
});

test('pagination works correctly', async () => {
  render(
    <BrowserRouter>
      <UserPage />
    </BrowserRouter>
  );

  // Wait for users to be fetched and rendered
  await waitFor(() => screen.getByText(/John Doe/i));

  // Simulate clicking the "Next" button
  fireEvent.click(screen.getByText(/Next/i));

  // Verify if pagination is working (next page)
  await waitFor(() => screen.getByText(/Page 2/i));
});

test('user deletion works correctly', async () => {
  render(
    <BrowserRouter>
      <UserPage />
    </BrowserRouter>
  );

  // Wait for users to be fetched and rendered
  await waitFor(() => screen.getByText(/John Doe/i));

  // Simulate clicking the "Remove this user" button
  const deleteButton = screen.getByText(/Remove this user/i);
  fireEvent.click(deleteButton);

  // Wait for the success message and verify the deletion
  await waitFor(() => {
    expect(screen.getByText(/Data deleted/i)).toBeInTheDocument();
  });

  // Ensure axios.delete was called
  expect(axios.delete).toHaveBeenCalled();
});
