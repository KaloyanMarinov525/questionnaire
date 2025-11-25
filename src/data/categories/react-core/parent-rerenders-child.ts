import { createQuestionId } from '../../types'
import type { Question } from '../../types'

export const parent_rerenders_child: Question = {
  id: createQuestionId('3dd5dc7c-3070-4b7f-b66c-94a2df8728be'),
  title: `Will a parent state change and re-render a child component`,
  answer: `Yes — in React, when a parent re-renders, all of its children are also re-rendered by default. This happens even if the child's props didn't change, because React reconciles the whole subtree.

However, the actual DOM update only happens if something in the child's rendered output changes (thanks to reconciliation).`,
  tags: ['Re-render', 'Parent-Child', 'State'],
}
