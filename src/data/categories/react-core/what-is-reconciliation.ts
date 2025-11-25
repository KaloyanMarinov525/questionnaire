import type { Question } from '../../types'

export const what_is_reconciliation: Question = {
  id: '2d9e4222-b2cb-429b-8b0a-19ea9839262b',
  title: `What is reconciliation`,
  answer: `Reconciliation is the process React uses to update the DOM (or native UI in RN) when a component's state or props change. React creates a new virtual DOM tree, compares it with the previous one using a diffing algorithm, and then updates only the parts of the real DOM that changed (not the whole tree).

## Key points:

- Uses the virtual DOM to minimize costly DOM operations.
- By default, React assumes elements of the same type can be reused.
- Keys help React optimize reconciliation when dealing with lists (to track elements correctly).
- In React 18+, reconciliation works with concurrent rendering, allowing React to pause, interrupt, and resume rendering for a smoother UI.`,
  tags: ['Reconciliation', 'Diffing', 'Virtual DOM'],
}
