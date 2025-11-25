import { createQuestionId } from '../../types'
import type { Question } from '../../types'

export const component: Question = {
  id: createQuestionId('3ae7c491-8e2e-4031-845d-571e9af48246'),
  title: `What is a component in React`,
  answer: `A component is a reusable, self-contained unit of UI. It can be a function or a class that returns React elements, accepts props as input, and can manage its own state. Components make complex UIs easier to build and maintain.`,
  tags: ['Component', 'Reusable', 'React'],
}
