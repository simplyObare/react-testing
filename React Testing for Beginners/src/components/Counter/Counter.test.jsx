import React from 'react'
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'
import Counter from './Counter'
import userEvent from '@testing-library/user-event'

describe('Counter', () => {
  it('increments counter on button click', async () => {
    render(<Counter />)
    const button = screen.getByRole('button', { name: /increment/i })
    const counterValue = screen.getByTestId('counter-value')

    expect(counterValue).toHaveTextContent('0')

    await userEvent.click(button)

    expect(counterValue).toHaveTextContent('1')
  })
})
