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

export interface CategoryMetadata {
  id: string
  name: string
  description: string
  color: string
  count: number
}

export function getCategoryMetadata(): Array<CategoryMetadata> {
  return questions.map((category) => ({
    id: category.id,
    name: category.name,
    description: category.description,
    color: category.color,
    count: category.questions.length,
  }))
}
