import { createQuestionId } from '../../types'
import type { Question } from '../../types'

export const types_of_state: Question = {
  id: createQuestionId('dc76b8a8-bfa7-4c5c-a436-0e66b7e8215b'),
  title: `What kinds of state do you know`,
  answer: `- Local/UI state: values managed inside a component with useState.
- Derived state: computed from props or other state using useMemo.
- Global/shared state: data shared across components using Context, Redux, or Zustand.
- Server/async state: remote data handled with tools like React Query or SWR.
- URL/router state: state synced with the browser URL via React Router or Next.js.`,
  tags: ['State', 'useState', 'State Management'],
}
