import { createQuestionId } from '../../types'
import type { Question } from '../../types'

export const try_catch_vs_promises: Question = {
  id: createQuestionId('384a8b33-7905-41f9-b39c-dcba9abb1a35'),
  title: `Explain the difference between try/catch and promises`,
  answer: `try/catch is for handling errors in synchronous code and async/await. Promises use .then() and .catch() for handling success and error states.

Try/Catch (works with async/await):
\`\`\`javascript
async function getData() {
  try {
    const data = await fetch('/api/data');
    return data;
  } catch (error) {
    console.error(error);
  }
}
\`\`\`

Promise .catch():
\`\`\`javascript
fetch('/api/data')
  .then(data => console.log(data))
  .catch(error => console.error(error));
\`\`\`

Try/catch is generally cleaner and easier to read.`,
  tags: ['Error Handling', 'Promise', 'Async/Await'],
}
