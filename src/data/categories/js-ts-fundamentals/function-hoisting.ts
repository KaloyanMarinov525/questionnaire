import { createQuestionId } from '../../types'
import type { Question } from '../../types'

export const function_hoisting: Question = {
  id: createQuestionId('c98c304b-987f-452c-9332-fce7307d0c6b'),
  title: `Are functions hoisted`,
  answer: `Yes. Function declarations are hoisted, so you can call them before their definition. Function expressions and arrow functions are hoisted as variables, not as initialized functions.

Example:
\`\`\`javascript
greet(); // ✅ works

function greet() {
  console.log("Hello!");
}
\`\`\`

Function expression:
\`\`\`javascript
sayHi(); // ❌ TypeError: sayHi is not a function

const sayHi = function () {
  console.log("Hi");
};
\`\`\`

Arrow function:
\`\`\`javascript
wave(); // ❌ TypeError: wave is not a function

const wave = () => {
  console.log("Wave");
};
\`\`\`

But with variables, it's different:
- var → hoisted but initialized with undefined.
- let / const → hoisted, but in the Temporal Dead Zone, so you get an error if accessed before definition.`,
  tags: ['Hoisting', 'Functions', 'Temporal Dead Zone'],
}
