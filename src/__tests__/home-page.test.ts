import { describe, expect, it } from 'vitest'
import { getCategoryMetadata } from '../data/questions'

describe('Home page data', () => {
  it('should generate metadata for all categories', () => {
    const metadata = getCategoryMetadata()
    expect(metadata).toHaveLength(6)
  })

  it('should have correct structure for category metadata', () => {
    const metadata = getCategoryMetadata()
    const firstCategory = metadata[0]

    expect(firstCategory).toHaveProperty('id')
    expect(firstCategory).toHaveProperty('name')
    expect(firstCategory).toHaveProperty('description')
    expect(firstCategory).toHaveProperty('color')
    expect(firstCategory).toHaveProperty('count')
  })

  it('should calculate correct question counts', () => {
    const metadata = getCategoryMetadata()
    const totalQuestions = metadata.reduce((sum, cat) => sum + cat.count, 0)
    expect(totalQuestions).toBeGreaterThan(0)
  })

  it('should have valid category IDs', () => {
    const metadata = getCategoryMetadata()
    const validIds = [
      'networking-apis',
      'js-ts-fundamentals',
      'react-core',
      'react-native',
      'state-management',
      'build-deployment',
    ]

    metadata.forEach((category) => {
      expect(validIds).toContain(category.id)
    })
  })

  it('should have valid colors', () => {
    const metadata = getCategoryMetadata()
    const validColors = [
      'from-blue-500 to-blue-600',
      'from-yellow-500 to-yellow-600',
      'from-cyan-500 to-cyan-600',
      'from-purple-500 to-purple-600',
      'from-green-500 to-green-600',
      'from-orange-500 to-orange-600',
    ]

    metadata.forEach((category) => {
      expect(validColors).toContain(category.color)
    })
  })

  it('should have all categories with non-empty descriptions', () => {
    const metadata = getCategoryMetadata()
    metadata.forEach((category) => {
      expect(category.description).toBeTruthy()
      expect(category.description.length).toBeGreaterThan(0)
    })
  })

  it('should have all categories with names', () => {
    const metadata = getCategoryMetadata()
    metadata.forEach((category) => {
      expect(category.name).toBeTruthy()
      expect(category.name.length).toBeGreaterThan(0)
    })
  })
})
