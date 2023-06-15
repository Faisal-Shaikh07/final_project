
import Products from './Products';
import { render, screen } from '@testing-library/react'

test("renders learn react link", async () => {
    render(<Products title="Latest Products" />);
    const headingElement = screen.getByText(/latest products/i);
    expect(headingElement).toBeInTheDocument();
});