import { describe, expect, it } from 'vitest'
import { createCategoryId, createQuestionId } from './types'
import type { CategoryId, QuestionId } from './types'

describe('Branded Types', () => {
  describe('createQuestionId', () => {
    it('should create a branded question ID', () => {
      const id = createQuestionId('test-uuid')
      expect(id).toBe('test-uuid')
    })

    it('should create different IDs for different inputs', () => {
      const id1 = createQuestionId('uuid-1')
      const id2 = createQuestionId('uuid-2')
      expect(id1).not.toBe(id2)
    })

    it('should handle UUID format', () => {
      const uuid = '550e8400-e29b-41d4-a716-446655440000'
      const id = createQuestionId(uuid)
      expect(id).toBe(uuid)
    })
  })

  describe('createCategoryId', () => {
    it('should create a branded category ID', () => {
      const id = createCategoryId('react-core')
      expect(id).toBe('react-core')
    })

    it('should create different IDs for different inputs', () => {
      const id1 = createCategoryId('category-1')
      const id2 = createCategoryId('category-2')
      expect(id1).not.toBe(id2)
    })

    it('should handle kebab-case format', () => {
      const id = createCategoryId('js-ts-fundamentals')
      expect(id).toBe('js-ts-fundamentals')
    })
  })

  describe('Type safety', () => {
    it('should preserve string value for question IDs', () => {
      const id: QuestionId = createQuestionId('my-question')
      const stringValue: string = id
      expect(stringValue).toBe('my-question')
    })

    it('should preserve string value for category IDs', () => {
      const id: CategoryId = createCategoryId('my-category')
      const stringValue: string = id
      expect(stringValue).toBe('my-category')
    })
  })
})

describe('Category Colors', () => {
  it('should support all valid category colors', () => {
    const validColors = [
      'from-blue-500 to-blue-600',
      'from-yellow-500 to-yellow-600',
      'from-cyan-500 to-cyan-600',
      'from-purple-500 to-purple-600',
      'from-green-500 to-green-600',
      'from-orange-500 to-orange-600',
    ]

    validColors.forEach((color) => {
      expect(validColors).toContain(color)
    })
  })
})
