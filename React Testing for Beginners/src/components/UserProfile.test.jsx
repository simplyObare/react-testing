import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import UserProfile from './UserProfile'
import { beforeEach, afterEach, describe, expect, it, vi } from 'vitest'
import '@testing-library/jest-dom/vitest'

describe('UserProfile', () => {
  beforeEach(() => {
    global.fetch = vi.fn()
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('fetches and displays the user data', async () => {
    global.fetch.mockResolvedValueOnce({
      json: async () => ({
        id: 4,
        name: 'John Doe',
        email: 'G7m0R@example.com',
      }),
    })

    render(<UserProfile userId={4} />)

    expect(screen.getByText(/loading/i)).toBeInTheDocument()

    await waitFor(() => {
      expect(screen.getByText('John Doe')).toBeInTheDocument()
      expect(screen.getByText('G7m0R@example.com')).toBeInTheDocument()
    })
  })
})
