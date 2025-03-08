import { describe, test, it, expect } from 'vitest'
import { max, fizzBuzz } from '../src/intro.js'

describe('max', () => {
  it('should return the first argument if it is greater', () => {
    expect(max(2, 1)).toBe(2)
  })

  it('should return the second argument if it is greater', () => {
    expect(max(1, 2)).toBe(2)
  })

  it('should return the first argument if the arguments are equal', () => {
    expect(max(1, 1)).toBe(1)
  })
})

describe('fizzBuzz', () => {
  it('should return "Fizz" if the number is divisible by 3', () => {
    expect(fizzBuzz(3)).toBe('Fizz')
  })

  it('should return "Buzz" if the number is divisible by 5', () => {
    expect(fizzBuzz(5)).toBe('Buzz')
  })

  it('should return "FizzBuzz" if the number is divisible by 3 and 5', () => {
    expect(fizzBuzz(15)).toBe('FizzBuzz')
  })
})
