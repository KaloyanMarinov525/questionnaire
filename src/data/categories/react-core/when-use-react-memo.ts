import type { Question } from '../../types'

export const when_use_react_memo: Question = {
  id: '551a5ca0-de81-4be4-944c-538089809f62',
  title: `When to use React.memo`,
  answer: `Useful when:
● A component receives stable props (numbers, strings, memoized objects/functions).
● Re-renders are expensive (big trees, heavy rendering).

Don't overuse:
● If props change frequently, React.memo adds overhead without benefit.
● Doesn't help if you pass new references (objects/functions) each time → use useMemo or useCallback to stabilize them.`,
  tags: ['React.memo', 'Performance', 'Optimization'],
}
