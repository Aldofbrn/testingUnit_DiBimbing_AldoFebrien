import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '.';
import { BrowserRouter } from 'react-router-dom';

// Mock the child components to isolate the Home component rendering
jest.mock('../../components/Navbar', () => () => <div>Navbar</div>);
jest.mock('../../components/Hero', () => () => <div>Hero</div>);
jest.mock('../../components/About', () => () => <div>About</div>);
jest.mock('../../components/NewsLetter', () => () => <div>NewsLetter</div>);
jest.mock('../../components/Cards', () => () => <div>Cards</div>);
jest.mock('../../components/Footer', () => () => <div>Footer</div>);
jest.mock('../../components/BreadCrumbs', () => () => <div>BreadCrumbs</div>);

describe('Home Component', () => {
  test('renders all child components', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    // Check if all child components are rendered
    expect(screen.getByText('Navbar')).toBeInTheDocument();
    expect(screen.getByText('Hero')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('NewsLetter')).toBeInTheDocument();
    expect(screen.getByText('Cards')).toBeInTheDocument();
    expect(screen.getByText('Footer')).toBeInTheDocument();
    expect(screen.getByText('BreadCrumbs')).toBeInTheDocument();
  });
});
