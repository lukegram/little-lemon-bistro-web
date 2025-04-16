
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Navbar from '../Navbar';

describe('Navbar', () => {
  it('renders navigation links', () => {
    render(<Navbar />);
    
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Menu')).toBeInTheDocument();
    expect(screen.getByText('Reservations')).toBeInTheDocument();
  });

  it('has correct ARIA roles and labels', () => {
    render(<Navbar />);
    
    expect(screen.getByRole('navigation')).toBeInTheDocument();
    expect(screen.getByLabelText('Shopping cart')).toBeInTheDocument();
    expect(screen.getByLabelText('Menu')).toBeInTheDocument();
  });
});
