import { render, screen } from '@testing-library/react'
import { Greet } from './Greet'

test('Greet renders correctly', () => {
  render(<Greet />)
  const testElement = screen.getByText(/hello/i)
  expect(testElement).toBeInTheDocument()
})
