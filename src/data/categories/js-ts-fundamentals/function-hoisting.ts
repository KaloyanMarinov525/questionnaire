import type { Question } from '../../types'

export const function_hoisting: Question = {
  id: 'c98c304b-987f-452c-9332-fce7307d0c6b',
  title: `Are functions hoisted`,
  answer: `Yes — but not only for functions. Function declarations are fully hoisted, so you can call them before their definition.

Example:
\`\`\`javascript
greet(); // ✅ works
function greet() {
  console.log("Hello!");
}
\`\`\`

But with variables, it's different:
● var → hoisted but initialized with undefined.
● let / const → hoisted, but in the Temporal Dead Zone, so you get an error if accessed before definition.`,
  tags: ['Hoisting', 'Functions', 'Temporal Dead Zone'],
}
