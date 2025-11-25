import { explain_state_management } from './explain-state-management'
import { debug_zustand } from './debug-zustand'
import { zustand_actions_reducers } from './zustand-actions-reducers'
import { redux_toolkit } from './redux-toolkit'
import { redux_slices } from './redux-slices'
import type { Category } from '../../types'

export const stateManagement: Category = {
  id: 'state-management',
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
