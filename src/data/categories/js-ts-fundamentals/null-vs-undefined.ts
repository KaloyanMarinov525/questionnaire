import type { Question } from '../../types'

export const null_vs_undefined: Question = {
  id: 'bf45f236-2c02-463f-85c1-2d16eb308b4a',
  title: `What is the difference between null and undefined`,
  answer: `● undefined: a value that indicates a variable has been declared but hasn't been assigned a value, or a function has no return value.
● null: a value deliberately assigned to represent "no value" or "empty".

Example:
\`\`\`javascript
let a; // undefined (declared but not assigned)
let b = null; // null (deliberately assigned)

function noReturn() {} // returns undefined

const obj = { x: null }; // deliberately empty
\`\`\`

typeof undefined returns "undefined"
typeof null returns "object" (this is actually a bug in JavaScript)

Use undefined for uninitialized variables, null for intentional absence of value.`,
  tags: ['Types', 'JavaScript', 'Values'],
}
