import { createQuestionId } from '../../types'
import type { Question } from '../../types'

export const usereducer: Question = {
  id: createQuestionId('4289fd4c-bd46-4eae-981e-2f65a394370e'),
  title: `What is useReducer`,
  answer: `useReducer is a React hook for managing complex or structured state. Instead of multiple useState calls, it uses a reducer function (state, action) => newState to handle state transitions. It provides better organization when state has multiple sub-values or depends on previous updates.`,
  tags: ['useReducer', 'State Management', 'Hooks'],
}
