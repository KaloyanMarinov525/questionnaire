import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { KeyboardHints } from './KeyboardHints'

describe('KeyboardHints', () => {
  it('should render keyboard hints title', () => {
    render(<KeyboardHints />)
    expect(screen.getByText(/Keyboard Shortcuts/)).toBeInTheDocument()
  })

  it('should display left arrow shortcut', () => {
    render(<KeyboardHints />)
    expect(screen.getByText('Previous question')).toBeInTheDocument()
  })

  it('should display right arrow shortcut', () => {
    render(<KeyboardHints />)
    expect(screen.getByText('Next question')).toBeInTheDocument()
  })

  it('should display up arrow shortcut', () => {
    render(<KeyboardHints />)
    expect(screen.getByText('Hide answer')).toBeInTheDocument()
  })

  it('should display down arrow shortcut', () => {
    render(<KeyboardHints />)
    expect(screen.getByText('Show answer')).toBeInTheDocument()
  })

  it('should display keyboard emoji', () => {
    const { container } = render(<KeyboardHints />)
    expect(container.textContent).toContain('⌨️')
  })

  it('should display all arrow symbols', () => {
    const { container } = render(<KeyboardHints />)
    expect(container.textContent).toContain('←')
    expect(container.textContent).toContain('→')
    expect(container.textContent).toContain('↑')
    expect(container.textContent).toContain('↓')
  })

  it('should have fixed positioning', () => {
    const { container } = render(<KeyboardHints />)
    const hintBox = container.querySelector('div')
    expect(hintBox).toHaveClass('fixed')
    expect(hintBox).toHaveClass('bottom-4')
    expect(hintBox).toHaveClass('right-4')
  })

  it('should render all hints in a list', () => {
    const { container } = render(<KeyboardHints />)
    const listItems = container.querySelectorAll('li')
    expect(listItems).toHaveLength(4)
  })

  it('should have proper styling for keyboard keys', () => {
    const { container } = render(<KeyboardHints />)
    const keyElements = container.querySelectorAll('span.font-mono')
    expect(keyElements).toHaveLength(4)
  })
})
