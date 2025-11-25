import { createQuestionId } from '../../types'
import type { Question } from '../../types'

export const hoisting: Question = {
  id: createQuestionId('d8f3d221-dea0-4707-9612-ea32e60312fe'),
  title: `What is hoisting`,
  answer: `Hoisting is JavaScript's behavior of moving declarations to the top of their scope during compilation. Variables declared with var are hoisted and initialized with undefined. Functions declared with function are hoisted fully (can be called before definition). Variables declared with let and const are hoisted too but stay in the Temporal Dead Zone until their declaration is executed.

Example:
\`\`\`javascript
console.log(a); // undefined
var a = 5;
foo(); // works
function foo() {
  console.log("Hello");
}
console.log(b); // ❌ ReferenceError
let b = 10;
\`\`\``,
  tags: ['Hoisting', 'JavaScript', 'Variable Declaration'],
}
