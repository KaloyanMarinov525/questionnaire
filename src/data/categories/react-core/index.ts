import { react } from './react'
import { how_react_works } from './how-react-works'
import { what_is_reconciliation } from './what-is-reconciliation'
import { parent_rerenders_child } from './parent-rerenders-child'
import { prevent_child_rerenders } from './prevent-child-rerenders'
import { react_memo } from './react-memo'
import { when_use_react_memo } from './when-use-react-memo'
import { react_memo_without_hooks } from './react-memo-without-hooks'
import { react_memo_with_hooks } from './react-memo-with-hooks'
import { jsx } from './jsx'
import { component } from './component'
import { explain_functional_component } from './explain-functional-component'
import { component_lifecycle } from './component-lifecycle'
import { hooks_lifecycle_events } from './hooks-lifecycle-events'
import { hook } from './hook'
import { types_of_state } from './types-of-state'
import { navigation } from './navigation'
import { list_data } from './list-data'
import { api_requests } from './api-requests'
import { component_structure } from './component-structure'
import { usememo_vs_usestate } from './usememo-vs-usestate'
import { dependency_array } from './dependency-array'
import { what_is_memoization } from './what-is-memoization'
import { forms } from './forms'
import { hoc_example } from './hoc-example'
import { hocs_deprecated } from './hocs-deprecated'
import { types_of_hooks } from './types-of-hooks'
import { performance_hooks } from './performance-hooks'
import { refs_dom_hooks } from './refs-dom-hooks'
import { usereducer } from './usereducer'
import type { Category } from '../../types'

export const reactCore: Category = {
  id: 'react-core',
  name: 'React Core Concepts',
  description: 'Components, hooks, lifecycle, reconciliation',
  color: 'from-cyan-500 to-cyan-600',
  questions: [
    react,
    how_react_works,
    what_is_reconciliation,
    parent_rerenders_child,
    prevent_child_rerenders,
    react_memo,
    when_use_react_memo,
    react_memo_without_hooks,
    react_memo_with_hooks,
    jsx,
    component,
    explain_functional_component,
    component_lifecycle,
    hooks_lifecycle_events,
    hook,
    types_of_state,
    navigation,
    list_data,
    api_requests,
    component_structure,
    usememo_vs_usestate,
    dependency_array,
    what_is_memoization,
    forms,
    hoc_example,
    hocs_deprecated,
    types_of_hooks,
    performance_hooks,
    refs_dom_hooks,
    usereducer,
  ],
}
