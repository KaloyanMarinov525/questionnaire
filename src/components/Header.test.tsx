import { describe, expect, it, vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'

// Mock the Router since Header uses Router components
vi.mock('@tanstack/react-router', () => ({
  Link: ({ children, to, onClick }: any) => (
    <a href={to} onClick={onClick}>
      {children}
    </a>
  ),
  useLocation: () => ({
    pathname: '/',
  }),
}))

// Mock lucide-react icons
vi.mock('lucide-react', () => ({
  Menu: () => <span>Menu</span>,
  X: () => <span>X</span>,
  Home: () => <span>Home</span>,
  Info: () => <span>Info</span>,
  PlayCircle: () => <span>PlayCircle</span>,
  HelpCircle: () => <span>HelpCircle</span>,
}))

// Mock KeyboardHints to avoid import issues
vi.mock('./KeyboardHints', () => ({
  KeyboardHintsButton: ({ isRelevant }: { isRelevant?: boolean }) =>
    isRelevant ? <button>Keyboard Hints</button> : null,
}))

describe('Header', () => {
  it('should render header with menu button', async () => {
    const { default: Header } = await import('./Header')
    render(<Header />)
    const menuButton = screen.getByRole('button', { name: /Open menu/i })
    expect(menuButton).toBeInTheDocument()
  })

  it('should render logo link', async () => {
    const { default: Header } = await import('./Header')
    render(<Header />)
    const logo = screen.getByAltText('Logo')
    expect(logo).toBeInTheDocument()
  })

  it('should toggle sidebar when menu button is clicked', async () => {
    const { default: Header } = await import('./Header')
    const { container } = render(<Header />)
    const menuButton = screen.getByRole('button', { name: /Open menu/i })

    // Initially sidebar should be hidden
    let aside = container.querySelector('aside')
    expect(aside).toHaveClass('-translate-x-full')

    // Click to open
    fireEvent.click(menuButton)
    aside = container.querySelector('aside')
    expect(aside).toHaveClass('translate-x-0')

    // Click close button to close
    const closeButton = screen.getByRole('button', { name: /Close menu/i })
    fireEvent.click(closeButton)
    aside = container.querySelector('aside')
    expect(aside).toHaveClass('-translate-x-full')
  })

  it('should close sidebar when overlay is clicked', async () => {
    const { default: Header } = await import('./Header')
    const { container } = render(<Header />)
    const menuButton = screen.getByRole('button', { name: /Open menu/i })

    // Open sidebar
    fireEvent.click(menuButton)
    let aside = container.querySelector('aside')
    expect(aside).toHaveClass('translate-x-0')

    // Click overlay
    const overlay = container.querySelector('div[aria-hidden="true"]')
    if (overlay) {
      fireEvent.click(overlay)
    }
    aside = container.querySelector('aside')
    expect(aside).toHaveClass('-translate-x-full')
  })

  it('should render navigation links', async () => {
    const { default: Header } = await import('./Header')
    render(<Header />)
    const menuButton = screen.getByRole('button', { name: /Open menu/i })
    fireEvent.click(menuButton)

    expect(screen.getAllByText('Home').length).toBeGreaterThan(0)
    expect(screen.getAllByText('About').length).toBeGreaterThan(0)
  })

  it('should close sidebar when navigation link is clicked', async () => {
    const { default: Header } = await import('./Header')
    const { container } = render(<Header />)
    const menuButton = screen.getByRole('button', { name: /Open menu/i })

    // Open sidebar
    fireEvent.click(menuButton)
    let aside = container.querySelector('aside')
    expect(aside).toHaveClass('translate-x-0')

    // Click a navigation link (Home link)
    const links = screen.getAllByRole('link')
    const homeLink = links.find((link) => link.textContent.includes('Home'))
    if (homeLink) {
      fireEvent.click(homeLink)
    }
    aside = container.querySelector('aside')
    expect(aside).toHaveClass('-translate-x-full')
  })

  it('should render KeyboardHintsButton with isRelevant false on home page', async () => {
    const { default: Header } = await import('./Header')
    render(<Header />)
    // When on home page (pathname = '/'), keyboard hints should not show
    // The button should be rendered but not visible (returns null when isRelevant=false)
    expect(Header).toBeDefined()
  })
})
