import { createQuestionId } from '../../types'
import type { Question } from '../../types'

export const performance_hooks: Question = {
  id: createQuestionId('7e02cf8d-8ec9-4805-8858-597c0245f322'),
  title: `What are Performance hooks: useMemo, useCallback, useTransition, useDeferredValue`,
  answer: `- useMemo: Memoizes a computed value, recalculates only when dependencies change.
- useCallback: Memoizes a function to keep stable references between renders.
- useTransition: Marks state updates as non-urgent, allowing React to keep UI responsive.
- useDeferredValue: Defers updating a value until the UI is less busy, useful for expensive renders.`,
  tags: ['Performance Hooks', 'Optimization', 'React 18'],
}
