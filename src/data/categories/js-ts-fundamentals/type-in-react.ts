import { createQuestionId } from '../../types'
import type { Question } from '../../types'

export const type_in_react: Question = {
  id: createQuestionId('96b96295-3d37-4abb-86e4-686e493a627b'),
  title: `When to use type in React projects`,
  answer: `Types are better for unions, intersections, tuples, and primitives. They are more flexible when combining different kinds of definitions.

Example:
\`\`\`typescript
type Size = "small" | "medium" | "large";
type ButtonVariant = {
  primary: boolean;
} & { size: Size };
const variant: ButtonVariant = { primary: true, size: "medium" };
\`\`\``,
  tags: ['TypeScript', 'Types', 'Unions'],
}
