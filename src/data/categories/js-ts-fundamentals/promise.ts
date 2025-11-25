import type { Question } from '../../types'

export const promise: Question = {
  id: '3d3899a6-efc3-48a4-982e-efa56d7a470b',
  title: `Explain promise`,
  answer: `A Promise in JavaScript is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. It has three states:
● pending → initial state, operation not finished yet.
● fulfilled → operation completed successfully.
● rejected → operation failed with an error.

You handle results with .then() and .catch(), or with async/await for cleaner syntax.

Example:
\`\`\`javascript
const fetchData = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Data loaded"), 1000);
});
fetchData
  .then(data => console.log(data))
  // Data loaded
  .catch(error => console.error(error));
\`\`\``,
  tags: ['Promise', 'Asynchronous', 'JavaScript'],
}
