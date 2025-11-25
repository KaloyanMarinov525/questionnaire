import type { Question } from '../../types'

export const how_react_works: Question = {
  id: 'ae2b64e8-1d61-458a-98ed-c466b043db00',
  title: `Explain how React works`,
  answer: `React builds a virtual representation of the UI (Virtual DOM) in memory. When state or props change, it diffs the new virtual tree against the old one and efficiently updates only the changed parts in the real DOM. This makes UI updates predictable and performant.`,
  tags: ['React', 'Virtual DOM', 'Rendering'],
}
