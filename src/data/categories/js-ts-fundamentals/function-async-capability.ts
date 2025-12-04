import { createQuestionId } from '../../types'
import type { Question } from '../../types'

export const function_async_capability: Question = {
  id: createQuestionId('c1a7f943-5baa-43aa-abb4-8e12a71f942b'),
  title: `Does every function have the ability to become async`,
  answer: `Yes — in JavaScript you can declare any function as async. When you do, it will always return a Promise, even if you return a plain value. Inside an async function you can use await to pause execution until a Promise resolves.

Example:
\`\`\`javascript
async function add(a, b) {
  return a + b; // actually returns Promise<number>
}

add(2, 3).then(result => console.log(result)); // 5
\`\`\`

However, await only makes sense inside async functions, and turning every function into async unnecessarily can make code harder to reason about.`,
  tags: ['Async', 'Promise', 'Functions'],
}
