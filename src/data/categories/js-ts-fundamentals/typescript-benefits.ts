import type { Question } from '../../types'

export const typescript_benefits: Question = {
  id: '4e7e307a-4e77-4115-b3a4-4bcbfa3d25a5',
  title: `How does TypeScript work and what are its benefits`,
  answer: `TypeScript is a superset of JavaScript that adds static typing. Code is written in .ts files, compiled (transpiled) by the TypeScript compiler (tsc) into plain JavaScript that browsers can run.

Benefits:
- Type safety: catches errors at compile time instead of runtime.
- Better tooling: autocompletion, IntelliSense, and refactoring in IDEs.
- Readability & maintainability: types make contracts between components clear.
- Scalability: large projects are easier to manage with strict typing.
- Modern JS features: support for latest ECMAScript features before native adoption.`,
  tags: ['TypeScript', 'Type Safety', 'Compilation'],
}
