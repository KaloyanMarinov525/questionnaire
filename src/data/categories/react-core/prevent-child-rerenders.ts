import type { Question } from '../../types'

export const prevent_child_rerenders: Question = {
  id: 'f07351a6-2fb0-4a1e-be10-ce6e2b04c12c',
  title: `How to prevent unnecessary child re-renders`,
  answer: `● Wrap child with React.memo → skips re-render if props are shallowly equal.
● Use useCallback / useMemo in the parent to keep function/prop references stable.
● Lift state only when necessary, avoid keeping parent state that forces unnecessary rerenders.`,
  tags: ['Performance', 'React.memo', 'Optimization'],
}
