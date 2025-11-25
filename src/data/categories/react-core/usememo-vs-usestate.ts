import type { Question } from '../../types'

export const usememo_vs_usestate: Question = {
  id: '5d6b0b13-d074-4302-9a00-770539f00c41',
  title: `How does useMemo differ from useState`,
  answer: `useState is for managing component state — it stores a value and provides a setter that triggers re-renders when updated.

useMemo does not store state; it memoizes a computed value during render and recalculates only when dependencies change. It doesn't trigger re-renders by itself.`,
  tags: ['useMemo', 'useState', 'Hooks'],
}
