import { createQuestionId } from '../../types'
import type { Question } from '../../types'

export const list_data: Question = {
  id: createQuestionId('748c7cbe-cda7-4d6a-98ab-84fd1092a20e'),
  title: `How do we list data in React`,
  answer: `We map over arrays and return React elements for each item:
\`\`\`javascript
{items.map(item => (
  <li key={item.id}>{item.name}</li>
))}
\`\`\`

Each element should have a unique key prop for efficient reconciliation.`,
  tags: ['List', 'Map', 'Keys'],
}
