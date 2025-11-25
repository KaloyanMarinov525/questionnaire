import { createQuestionId } from '../../types'
import type { Question } from '../../types'

export const react: Question = {
  id: createQuestionId('8cc17101-5545-4731-8f10-161d38672c0a'),
  title: `What is React`,
  answer: `React is a declarative, component-based JavaScript library for building user interfaces. It uses a virtual DOM for efficient rendering and supports both client- and server-side rendering.`,
  tags: ['React', 'Library', 'UI'],
}
