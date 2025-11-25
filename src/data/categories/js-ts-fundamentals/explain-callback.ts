import { createQuestionId } from '../../types'
import type { Question } from '../../types'

export const explain_callback: Question = {
  id: createQuestionId('d6e7ab6b-5096-49ac-ba8d-c7680a26eae3'),
  title: `Explain callback`,
  answer: `A callback is a function passed as an argument to another function, so it can be executed later, usually after some operation is complete. Callbacks are common in asynchronous code, like handling API responses or events.

Example:
\`\`\`javascript
function fetchData(callback) {
  setTimeout(() => {
    callback("Data loaded");
  }, 1000);
}
fetchData(result => {
  console.log(result); // Data loaded
});
\`\`\``,
  tags: ['Callback', 'Asynchronous', 'Functions'],
}
