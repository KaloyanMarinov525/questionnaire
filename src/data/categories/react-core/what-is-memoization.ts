import { createQuestionId } from '../../types'
import type { Question } from '../../types'

export const what_is_memoization: Question = {
  id: createQuestionId('b1196593-e1e3-4dfe-a288-6cbdc3407c20'),
  title: `What is memoization`,
  answer: `Memoization is an optimization technique that stores the results of function calls and returns the cached result when the same inputs occur again. In React, hooks like useMemo and useCallback apply memoization to avoid unnecessary recalculations or re-creations of functions/values, improving performance.`,
  tags: ['Memoization', 'Performance', 'Optimization'],
}
