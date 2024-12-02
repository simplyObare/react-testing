import { render, screen } from '@testing-library/react'
import { Greet2 } from './Greet2'

test('Greet2 renders correctly', () => {
  render(<Greet2 />)
  const testElement = screen.getByText('Hello')
  expect(testElement).toBeInTheDocument()
})

test('Greet2 renders name correctly', () => {
  render(<Greet2 name="John" />)
  const testElement = screen.getByText('Hello John')
  expect(testElement).toBeInTheDocument()
})
