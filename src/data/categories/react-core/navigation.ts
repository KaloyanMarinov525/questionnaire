import { createQuestionId } from '../../types'
import type { Question } from '../../types'

export const navigation: Question = {
  id: createQuestionId('ca0e54c8-ae6f-4d29-850c-fec909afb7b2'),
  title: `Explain navigation in React`,
  answer: `Navigation in React is usually managed with routing libraries. The most common is React Router, which maps URLs to components using <Routes> and <Route>. In frameworks like Next.js, navigation is file-based and handled via <Link> and router hooks. Navigation updates the URL, renders the correct component, and preserves state where needed.`,
  tags: ['Navigation', 'Routing', 'React Router'],
}
