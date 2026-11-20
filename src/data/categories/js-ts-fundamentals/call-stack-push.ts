import { createQuestionId } from '../../types'
import type { Question } from '../../types'

export const call_stack_push: Question = {
  id: createQuestionId('8ded435c-f94f-48a7-9289-21c30f6420e5'),
  title: `When a function is called, it's pushed onto the stack`,
  answer: `JavaScript is single-threaded, so it executes one function at a time from the call stack.

Example:
\`\`\`javascript
const a = () => {
  console.log("a");
};

const b = () => {
  a();
  console.log("b");
};

b();

// Order: a → b
\`\`\``,
  tags: ['Call Stack', 'Execution', 'Stack'],
}
