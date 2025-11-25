import { createQuestionId } from '../../types'
import type { Question } from '../../types'

export const component_structure: Question = {
  id: createQuestionId('d965e485-358d-494d-a3f7-606d72254f53'),
  title: `How do you structure React components more efficiently`,
  answer: `Prefer feature-based folders (by domain, not by type). Keep components small and single-purpose; compose them instead of nesting logic. Colocate everything a component needs (hooks, styles, tests). Extract side effects/data logic into custom hooks; keep components mostly presentational. Use TypeScript props for clear contracts and avoid prop drilling with context or a small store. Name files clearly (UserCard.tsx, useUser.ts).`,
  tags: ['Component Structure', 'Architecture', 'Best Practices'],
}
