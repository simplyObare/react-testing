import React from 'react'
import { render, screen } from '@testing-library/react'
import Greeting from './Greeting'
import { describe, expect, it } from 'vitest'
import '@testing-library/jest-dom/vitest'

describe('Greeting', () => {
  it('should render a default greeting', () => {
    render(<Greeting />)
    expect(screen.getByText('Hello, World!')).toBeInTheDocument()
  })

  it('should render greeting with a name', () => {
    render(<Greeting name={'Pedro'} />)
    expect(screen.getByText('Hello, Pedro!')).toBeInTheDocument()
  })
})
