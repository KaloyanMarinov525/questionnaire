import { createQuestionId } from '../../types'
import type { Question } from '../../types'

export const single_thread: Question = {
  id: createQuestionId('e9105080-50f1-4f6c-b43e-e4e21eee8988'),
  title: `Explain JavaScript Single-Thread`,
  answer: `JavaScript is single-threaded, meaning it has one call stack and can execute one task at a time. Unlike multi-threaded languages, it doesn't run multiple pieces of code simultaneously in the same process.

- Single call stack: all synchronous code runs line by line.
- Asynchronous behavior: achieved not by multiple threads, but by the event loop delegating tasks to the browser (or Node.js APIs) and then queueing callbacks.
- Non-blocking I/O: while JS is single-threaded, heavy operations like timers, network requests, or file access are offloaded to the environment; JS gets the result later via callbacks, promises, or async/await.

Example:
\`\`\`javascript
console.log("start");
setTimeout(() => console.log("timeout"), 0);
console.log("end");
// Output: start → end → timeout
\`\`\`

Even though setTimeout is 0ms, the callback waits until the stack is clear because only one thread executes JS.`,
  tags: ['JavaScript', 'Event Loop', 'Threading'],
}
