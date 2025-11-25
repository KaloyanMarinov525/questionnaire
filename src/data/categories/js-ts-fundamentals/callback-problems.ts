import type { Question } from '../../types'

export const callback_problems: Question = {
  id: 'f91e3b07-4716-4a5a-a740-1cf323b849d5',
  title: `Explain what is wrong with callbacks`,
  answer: `Callbacks work, but they have several drawbacks:
- Callback Hell: nested callbacks make code deeply indented and hard to read/maintain.
- Error handling issues: mixing success and error callbacks is messy.
- Inversion of control: passing control to external code can lead to unexpected behavior.
- Hard to compose: chaining multiple async tasks becomes complicated.

That's why Promises and later async/await were introduced — to make asynchronous code cleaner, more predictable, and easier to manage.`,
  tags: ['Callback', 'Asynchronous', 'Anti-pattern'],
}
