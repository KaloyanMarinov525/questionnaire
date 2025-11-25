import { describe, expect, it } from 'vitest'
import { cn, parseSelectValue } from './utils'

describe('cn utility function', () => {
  it('should merge basic class strings', () => {
    const result = cn('px-2', 'py-1')
    expect(result).toContain('px-2')
    expect(result).toContain('py-1')
  })

  it('should handle conditional classes', () => {
    const result = cn('base-class', 'active-class')
    expect(result).toContain('base-class')
    expect(result).toContain('active-class')
  })

  it('should merge conflicting tailwind classes', () => {
    const result = cn('px-2', 'px-4')
    expect(result).toContain('px-4')
    expect(result).not.toContain('px-2')
  })

  it('should merge conflicting width classes', () => {
    const result = cn('w-full', 'w-1/2')
    expect(result).toContain('w-1/2')
    expect(result).not.toContain('w-full')
  })

  it('should merge conflicting background classes', () => {
    const result = cn('bg-red-500', 'bg-blue-500')
    expect(result).toContain('bg-blue-500')
    expect(result).not.toContain('bg-red-500')
  })

  it('should handle empty inputs', () => {
    const result = cn()
    expect(result).toBe('')
  })

  it('should handle single empty string', () => {
    const result = cn('')
    expect(result).toBe('')
  })

  it('should filter out falsy values', () => {
    const result = cn('base', false, undefined, null, 'active')
    expect(result).toContain('base')
    expect(result).toContain('active')
  })

  it('should handle all falsy values', () => {
    const result = cn(false, undefined, null, '')
    expect(result).toBe('')
  })

  it('should handle array inputs from clsx', () => {
    const result = cn(['px-2', 'py-1'], 'text-white')
    expect(result).toContain('px-2')
    expect(result).toContain('py-1')
    expect(result).toContain('text-white')
  })

  it('should handle nested arrays', () => {
    const result = cn(['px-2', ['py-1', 'text-white']], 'bg-slate-800')
    expect(result).toContain('px-2')
    expect(result).toContain('py-1')
    expect(result).toContain('text-white')
    expect(result).toContain('bg-slate-800')
  })

  it('should handle object notation from clsx', () => {
    const result = cn({
      'px-2': true,
      'py-1': true,
      'text-red-500': false,
    })
    expect(result).toContain('px-2')
    expect(result).toContain('py-1')
    expect(result).not.toContain('text-red-500')
  })

  it('should combine multiple conflicting classes correctly', () => {
    const result = cn(
      'px-2 py-1 bg-red-500',
      'px-4 bg-blue-500'
    )
    expect(result).toContain('px-4')
    expect(result).toContain('py-1')
    expect(result).toContain('bg-blue-500')
  })
})

describe('parseSelectValue utility function', () => {
  it('should parse string number to integer', () => {
    const result = parseSelectValue('5')
    expect(result).toBe(5)
  })

  it('should return number as-is when passed number', () => {
    const result = parseSelectValue(10)
    expect(result).toBe(10)
  })

  it('should return 0 for invalid string', () => {
    const result = parseSelectValue('abc')
    expect(result).toBe(0)
  })

  it('should return 0 for empty string', () => {
    const result = parseSelectValue('')
    expect(result).toBe(0)
  })

  it('should handle zero string', () => {
    const result = parseSelectValue('0')
    expect(result).toBe(0)
  })

  it('should handle negative numbers', () => {
    const result = parseSelectValue('-5')
    expect(result).toBe(-5)
  })

  it('should handle large numbers', () => {
    const result = parseSelectValue('99999')
    expect(result).toBe(99999)
  })

  it('should handle zero as number', () => {
    const result = parseSelectValue(0)
    expect(result).toBe(0)
  })

  it('should handle leading/trailing spaces in string', () => {
    const result = parseSelectValue('  42  ')
    expect(result).toBe(42)
  })

  it('should handle decimal strings', () => {
    const result = parseSelectValue('3.7')
    expect(result).toBe(3)
  })

  it('should distinguish between string and number input', () => {
    const stringResult = parseSelectValue('100')
    const numberResult = parseSelectValue(100)
    expect(stringResult).toBe(numberResult)
  })
})
