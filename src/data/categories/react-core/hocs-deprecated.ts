import { createQuestionId } from '../../types'
import type { Question } from '../../types'

export const hocs_deprecated: Question = {
  id: createQuestionId('1f5998ef-1f1c-4b91-acd2-6ea56e7e2d39'),
  title: `Why did we stop using HOCs`,
  answer: `HOCs were widely used for cross-cutting concerns (logging, fetching, theming), but they add nested component layers, make props tracing harder, and can conflict with static typing. With the introduction of hooks (useContext, useReducer, useCustomHooks), most HOC use cases became simpler, more explicit, and easier to compose without extra wrappers.`,
  tags: ['HOC', 'Hooks', 'Pattern Evolution'],
}
