import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Hero from '../Hero';

describe('Hero', () => {
  it('renders hero content', () => {
    render(<Hero />);
    
    expect(screen.getByText('Little Lemon')).toBeInTheDocument();
    expect(screen.getByText('Chicago')).toBeInTheDocument();
    expect(screen.getByText(/family owned Mediterranean restaurant/i)).toBeInTheDocument();
  });

  it('has reservation form', () => {
    render(<Hero />);
    expect(screen.getByRole('form')).toBeInTheDocument();
  });

  it('has accessible image', () => {
    render(<Hero />);
    const image = screen.getByAltText('Little Lemon restaurant interior');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('loading', 'eager');
    expect(image).toHaveAttribute('src', '/hero.jpg');
  });
});
