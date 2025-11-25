import type { Question } from '../../types'

export const explain_state_management: Question = {
  id: '98a25420-8118-42a8-8b0d-a34fac5363a9',
  title: `Explain state management`,
  answer: `State management is the way we handle and share data across a React application. For local UI state, we use hooks like useState and useReducer. For derived or computed state, we use useMemo. When multiple components need the same data, we use Context or external libraries like Redux, Zustand, or Jotai. For server state, tools like React Query or SWR manage fetching, caching, and synchronization.`,
  tags: ['State Management', 'Architecture', 'React'],
}
