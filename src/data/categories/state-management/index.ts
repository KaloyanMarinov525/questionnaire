import { createCategoryId } from '../../types'
import { debug_zustand } from './debug-zustand'
import { explain_state_management } from './explain-state-management'
import { redux_slices } from './redux-slices'
import { redux_toolkit } from './redux-toolkit'
import { zustand_actions_reducers } from './zustand-actions-reducers'
import type { Category } from '../../types'

export const stateManagement: Category = {
  id: createCategoryId('state-management'),
  name: 'State Management',
  description: 'Local state, Zustand, Redux Toolkit',
  color: 'from-green-500 to-green-600',
  questions: [
    explain_state_management,
    debug_zustand,
    zustand_actions_reducers,
    redux_toolkit,
    redux_slices,
  ],
}
