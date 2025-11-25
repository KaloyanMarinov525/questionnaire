import { describe, expect, it } from 'vitest'

describe('Entry Points', () => {
  describe('env.ts', () => {
    it('should be importable', async () => {
      const envModule = await import('../env')
      expect(envModule).toBeDefined()
    })
  })

  describe('main.tsx', () => {
    it('should be importable', async () => {
      const mainModule = await import('../main')
      expect(mainModule).toBeDefined()
    })
  })

  describe('reportWebVitals.ts', () => {
    it('should be importable', async () => {
      const webVitalsModule = await import('../reportWebVitals')
      expect(webVitalsModule).toBeDefined()
    })

    it('should export reportWebVitals as default', async () => {
      const reportWebVitals = await import('../reportWebVitals').then(
        (m) => m.default,
      )
      expect(reportWebVitals).toBeDefined()
      expect(typeof reportWebVitals).toBe('function')
    })
  })

  describe('routeTree.gen.ts', () => {
    it('should be importable', async () => {
      const routeTreeModule = await import('../routeTree.gen')
      expect(routeTreeModule).toBeDefined()
    })
  })
})
