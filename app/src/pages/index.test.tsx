import { render, screen } from '@testing-library/react';
import Home from '.';

describe('index', () => {
  it('should render correctly', () => {
    render(<Home />);
    expect(screen.getByText('Get started by editing')).toBeInTheDocument();
  });
});
