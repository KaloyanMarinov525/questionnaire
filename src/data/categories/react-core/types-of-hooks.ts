import { createQuestionId } from '../../types'
import type { Question } from '../../types'

export const types_of_hooks: Question = {
  id: createQuestionId('95c3d12d-4f9a-49c8-8506-796954f90135'),
  title: `What kinds of hooks do you know`,
  answer: `- Basic hooks: useState, useEffect, useContext. (Built-in)
- Performance hooks: useMemo, useCallback, useTransition, useDeferredValue.
- Refs & DOM hooks: useRef, useLayoutEffect, useImperativeHandle.
- Reducer hooks: useReducer for complex local state.
- Custom hooks: developer-defined, to encapsulate reusable logic.`,
  tags: ['Hooks', 'React', 'API'],
}
