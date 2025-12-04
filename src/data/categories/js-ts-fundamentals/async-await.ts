import { createQuestionId } from '../../types'
import type { Question } from '../../types'

export const async_await: Question = {
  id: createQuestionId('65510ad2-f31b-4587-88bc-33b04b964bb2'),
  title: `Explain async/await`,
  answer: `async/await is syntactic sugar built on top of Promises. An async function always returns a Promise. Inside it, you can use await to pause execution until a Promise resolves (or rejects). This makes asynchronous code look and behave more like synchronous code, improving readability and error handling.

Example:
\`\`\`javascript
async function getData() {
  try {
    const response = await fetch("https://api.example.com/data");

    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
}

getData();
\`\`\``,
  tags: ['Async/Await', 'Promise', 'Asynchronous'],
}
