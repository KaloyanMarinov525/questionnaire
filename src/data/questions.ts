import { networkingApis } from './categories/networking-apis'
import { jsTypeScriptFundamentals } from './categories/js-ts-fundamentals'
import { reactCore } from './categories/react-core'
import { reactNative } from './categories/react-native'
import { stateManagement } from './categories/state-management'
import { buildDeployment } from './categories/build-deployment'
import type { Category } from './types'

export const questions: Array<Category> = [
  networkingApis,
  jsTypeScriptFundamentals,
  reactCore,
  reactNative,
  stateManagement,
  buildDeployment,
]
