import { createQuestionId } from '../../types'
import type { Question } from '../../types'

export const jsx: Question = {
  id: createQuestionId('bc120d3d-9a24-4b35-b299-ff8edddd4c3d'),
  title: `What is JSX`,
  answer: `JSX (JavaScript XML) is a syntax extension for JavaScript that lets you write HTML-like code inside React. It makes UI structure easier to describe, but under the hood it compiles to React.createElement calls that build the virtual DOM.`,
  tags: ['JSX', 'Syntax', 'React'],
}
