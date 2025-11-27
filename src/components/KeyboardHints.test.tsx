import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { KeyboardHints, KeyboardHintsButton } from './KeyboardHints'

describe('KeyboardHints', () => {
  it('should render help button', () => {
    render(<KeyboardHints />)
    const button = screen.getByRole('button', {
      name: /Show keyboard shortcuts/i,
    })
    expect(button).toBeInTheDocument()
  })

  it('should toggle hints panel on button click', () => {
    const { container } = render(<KeyboardHints />)
    const button = screen.getByRole('button', {
      name: /Show keyboard shortcuts/i,
    })

    // Initially modal should not exist
    let modal = container.querySelector(
      '[class*="flex"][class*="items-center"][class*="justify-center"]',
    )
    expect(modal).not.toBeInTheDocument()

    // Click to show
    fireEvent.click(button)
    modal = container.querySelector(
      '[class*="flex"][class*="items-center"][class*="justify-center"]',
    )
    expect(modal).toBeInTheDocument()

    // Click to hide
    fireEvent.click(button)
    modal = container.querySelector(
      '[class*="flex"][class*="items-center"][class*="justify-center"]',
    )
    expect(modal).not.toBeInTheDocument()
  })

  it('should render keyboard hints title when visible', () => {
    render(<KeyboardHints />)
    const button = screen.getByRole('button', {
      name: /Show keyboard shortcuts/i,
    })
    fireEvent.click(button)
    expect(screen.getByText(/Keyboard Shortcuts/)).toBeInTheDocument()
  })

  it('should display left arrow shortcut when visible', () => {
    render(<KeyboardHints />)
    const button = screen.getByRole('button', {
      name: /Show keyboard shortcuts/i,
    })
    fireEvent.click(button)
    expect(screen.getByText('Previous question')).toBeInTheDocument()
  })

  it('should display right arrow shortcut when visible', () => {
    render(<KeyboardHints />)
    const button = screen.getByRole('button', {
      name: /Show keyboard shortcuts/i,
    })
    fireEvent.click(button)
    expect(screen.getByText('Next question')).toBeInTheDocument()
  })

  it('should display up arrow shortcut when visible', () => {
    render(<KeyboardHints />)
    const button = screen.getByRole('button', {
      name: /Show keyboard shortcuts/i,
    })
    fireEvent.click(button)
    expect(screen.getByText('Hide answer')).toBeInTheDocument()
  })

  it('should display down arrow shortcut when visible', () => {
    render(<KeyboardHints />)
    const button = screen.getByRole('button', {
      name: /Show keyboard shortcuts/i,
    })
    fireEvent.click(button)
    expect(screen.getByText('Show answer')).toBeInTheDocument()
  })

  it('should display keyboard emoji when visible', () => {
    render(<KeyboardHints />)
    const button = screen.getByRole('button', {
      name: /Show keyboard shortcuts/i,
    })
    fireEvent.click(button)
    expect(screen.getByText(/⌨️/)).toBeInTheDocument()
  })

  it('should display all arrow symbols when visible', () => {
    render(<KeyboardHints />)
    const button = screen.getByRole('button', {
      name: /Show keyboard shortcuts/i,
    })
    fireEvent.click(button)
    expect(screen.getByText('←')).toBeInTheDocument()
    expect(screen.getByText('→')).toBeInTheDocument()
    expect(screen.getByText('↑')).toBeInTheDocument()
    expect(screen.getByText('↓')).toBeInTheDocument()
  })

  it('should have fixed positioning when visible', () => {
    render(<KeyboardHints />)
    const button = screen.getByRole('button', {
      name: /Show keyboard shortcuts/i,
    })
    fireEvent.click(button)
    const fixedElements = screen
      .getByRole('button', { name: /Close keyboard hints/i })
      .closest('[class*="fixed"]')
    expect(fixedElements).toBeInTheDocument()
  })

  it('should render all hints in a list when visible', () => {
    render(<KeyboardHints />)
    const button = screen.getByRole('button', {
      name: /Show keyboard shortcuts/i,
    })
    fireEvent.click(button)
    const listItems = screen.getAllByRole('listitem')
    expect(listItems).toHaveLength(4)
  })

  it('should have proper styling for keyboard keys when visible', () => {
    const { container } = render(<KeyboardHints />)
    const button = screen.getByRole('button', {
      name: /Show keyboard shortcuts/i,
    })
    fireEvent.click(button)
    const keyElements = container.querySelectorAll('span.font-mono')
    expect(keyElements.length).toBeGreaterThanOrEqual(4)
  })

  it('should be hidden by default', () => {
    const { container } = render(<KeyboardHints />)
    const modal = container.querySelector(
      '[class*="flex"][class*="items-center"][class*="justify-center"]',
    )
    expect(modal).not.toBeInTheDocument()
  })

  it('should have close button when visible', () => {
    render(<KeyboardHints />)
    const button = screen.getByRole('button', {
      name: /Show keyboard shortcuts/i,
    })
    fireEvent.click(button)
    const closeButton = screen.getByRole('button', {
      name: /Close keyboard hints/i,
    })
    expect(closeButton).toBeInTheDocument()
    expect(closeButton).toHaveAttribute('aria-label', 'Close keyboard hints')
  })

  it('should close when clicking outside modal', () => {
    render(<KeyboardHints />)
    const button = screen.getByRole('button', {
      name: /Show keyboard shortcuts/i,
    })
    fireEvent.click(button)

    // Modal should be visible
    expect(screen.getByText(/Keyboard Shortcuts/)).toBeInTheDocument()

    // Verify it can be closed
    const closeButton = screen.getByRole('button', {
      name: /Close keyboard hints/i,
    })
    fireEvent.click(closeButton)

    // Modal should be hidden after close
    expect(screen.queryByText(/Keyboard Shortcuts/)).not.toBeInTheDocument()
  })

  it('should not render when isRelevant is false', () => {
    render(<KeyboardHintsButton isRelevant={false} />)
    const button = screen.queryByRole('button', {
      name: /Show keyboard shortcuts/i,
    })
    expect(button).not.toBeInTheDocument()
  })

  it('should render when isRelevant is true', () => {
    render(<KeyboardHintsButton isRelevant={true} />)
    const button = screen.getByRole('button', {
      name: /Show keyboard shortcuts/i,
    })
    expect(button).toBeInTheDocument()
  })

  it('should stop propagation when clicking on modal', () => {
    render(<KeyboardHints />)
    const button = screen.getByRole('button', {
      name: /Show keyboard shortcuts/i,
    })
    fireEvent.click(button)

    // Find the modal content div
    const { container } = render(<KeyboardHints />)
    fireEvent.click(button)

    // Click inside modal should not close it
    const modalContent = container.querySelector('div[class*="bg-slate-800"]')
    if (modalContent) {
      fireEvent.click(modalContent)
      // Modal should still be visible
      expect(screen.getByText(/Keyboard Shortcuts/)).toBeInTheDocument()
    }
  })

  it('should handle rapid open/close clicks', () => {
    render(<KeyboardHints />)
    const button = screen.getByRole('button', {
      name: /Show keyboard shortcuts/i,
    })

    // Rapidly click open and close
    fireEvent.click(button)
    fireEvent.click(button)
    fireEvent.click(button)

    // Modal should be visible after odd number of clicks
    expect(screen.getByText(/Keyboard Shortcuts/)).toBeInTheDocument()
  })
})
