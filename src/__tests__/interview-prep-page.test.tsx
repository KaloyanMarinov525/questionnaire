import { describe, expect, it } from 'vitest'

describe('Interview Prep Page Route', () => {
  it('should export Route with component', async () => {
    const module = await import('../routes/interview-prep.tsx')

    expect(module.Route).toBeDefined()
    expect(module.Route.options).toBeDefined()
    expect(module.Route.options.component).toBeDefined()
    expect(typeof module.Route.options.component).toBe('function')
  })

  it('should create a route for interview-prep path', async () => {
    const module = await import('../routes/interview-prep.tsx')

    // Check that the route is properly created
    expect(module.Route).toBeDefined()
    expect(module.Route.options.component).toBeDefined()
  })

  it('should export a functional React component', async () => {
    const module = await import('../routes/interview-prep.tsx')
    const Component = module.Route.options.component

    // Verify component exists and is callable
    expect(Component).toBeDefined()
    expect(typeof Component).toBe('function')
  })
})
