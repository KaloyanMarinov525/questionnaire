import { createCategoryId } from '../../types'
import { project_setup } from './project-setup'
import type { Category } from '../../types'

export const buildDeployment: Category = {
  id: createCategoryId('build-deployment'),
  name: 'Build & Deployment',
  description: 'Project setup, CI/CD, best practices',
  color: 'from-orange-500 to-orange-600',
  questions: [project_setup],
}
