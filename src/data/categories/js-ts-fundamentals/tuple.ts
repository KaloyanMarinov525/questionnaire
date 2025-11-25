import { createQuestionId } from '../../types'
import type { Question } from '../../types'

export const tuple: Question = {
  id: createQuestionId('7607cb8e-a3db-4778-b011-cc47a608b1c7'),
  title: `What is a tuple`,
  answer: `A tuple in TypeScript is a fixed-length array with predefined types for each element. Unlike normal arrays, each position in a tuple can have a different type, and the order matters.

Example:
\`\`\`typescript
let user: [string, number];
user = ["Anna", 25]; // ✅ valid
// user = [25, "Anna"]; ❌ error (wrong order)
\`\`\`

Tuples are often used for returning multiple values from a function or representing structured data.`,
  tags: ['TypeScript', 'Tuple', 'Types'],
}
