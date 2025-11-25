import { createCategoryId } from '../../types'
import { app_signing } from './app-signing'
import { debugging } from './debugging'
import { expo } from './expo'
import { native_modules } from './native-modules'
import { native_modules_expo } from './native-modules-expo'
import { navigate_vs_push } from './navigate-vs-push'
import { navigation_stacks } from './navigation-stacks'
import { performance_optimization } from './performance-optimization'
import { profiler } from './profiler'
import { provisioning_profile } from './provisioning-profile'
import { react_native } from './react-native'
import { react_native_cli } from './react-native-cli'
import { react_native_html } from './react-native-html'
import { routing } from './routing'
import { routing_concept } from './routing-concept'
import type { Category } from '../../types'

export const reactNative: Category = {
  id: createCategoryId('react-native'),
  name: 'React Native',
  description: 'Navigation, debugging, Expo, native modules',
  color: 'from-purple-500 to-purple-600',
  questions: [
    react_native,
    react_native_html,
    routing,
    routing_concept,
    navigation_stacks,
    navigate_vs_push,
    debugging,
    performance_optimization,
    profiler,
    expo,
    native_modules,
    native_modules_expo,
    react_native_cli,
    app_signing,
    provisioning_profile,
  ],
}
