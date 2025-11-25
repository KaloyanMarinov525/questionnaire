import { describe, expect, it, vi } from 'vitest'

// Mock the Router since Header uses Router components
vi.mock('@tanstack/react-router', () => ({
  Link: ({ children, to, onClick }: any) => (
    <a href={to} onClick={onClick}>
      {children}
    </a>
  ),
}))

// Mock lucide-react icons
vi.mock('lucide-react', () => ({
  Menu: () => <span>Menu</span>,
  X: () => <span>X</span>,
  Home: () => <span>Home</span>,
  Info: () => <span>Info</span>,
}))

describe('Header', () => {
  it('should be importable as a valid component', async () => {
    // Import Header asynchronously after mocks are set up
    const { default: Header } = await import('./Header')
    expect(Header).toBeDefined()
    expect(typeof Header).toBe('function')
  })
})

