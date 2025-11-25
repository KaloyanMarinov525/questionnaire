// Branded types for type safety
export type QuestionId = string & { readonly __brand: 'QuestionId' }
export type CategoryId = string & { readonly __brand: 'CategoryId' }

export function createQuestionId(id: string): QuestionId {
  return id as QuestionId
}

export function createCategoryId(id: string): CategoryId {
  return id as CategoryId
}

// Type-safe category colors
export type CategoryColor =
  | 'from-blue-500 to-blue-600'
  | 'from-yellow-500 to-yellow-600'
  | 'from-cyan-500 to-cyan-600'
  | 'from-purple-500 to-purple-600'
  | 'from-green-500 to-green-600'
  | 'from-orange-500 to-orange-600'

export interface Question {
  id: QuestionId
  title: string
  answer: string
  tags: Array<string>
}

export interface Category {
  id: CategoryId
  name: string
  description: string
  color: CategoryColor
  questions: Array<Question>
}
