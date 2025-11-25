import type { Question } from '../../types'

export const dependency_array: Question = {
  id: '1a301478-951e-43d7-a25c-cf1c8fb75f46',
  title: `What is the square bracket in both useMemo and useCallback used for`,
  answer: `The square brackets are the dependency array. They tell React when to recompute the memoized value (useMemo) or function (useCallback). If a dependency changes, the hook recalculates; if not, it reuses the cached result. An empty array ([]) means it runs only once on mount.`,
  tags: ['Dependency Array', 'useMemo', 'useCallback'],
}
