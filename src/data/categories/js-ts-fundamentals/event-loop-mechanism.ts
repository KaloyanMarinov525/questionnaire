import type { Question } from '../../types'

export const event_loop_mechanism: Question = {
  id: '3ed85afc-04ca-4e9e-a913-f7b8b8e74d34',
  title: `How the Event Loop works`,
  answer: `1. Execute synchronous code from the call stack.
2. When async tasks finish (like setTimeout, API calls, promises), their callbacks go into queues.
3. The event loop checks:
   - If the stack is empty → it first processes microtasks (promises).
   - Then it processes macro-tasks (timeouts, events).
4. This cycle repeats endlessly, giving the illusion of concurrency.

## Example:

\`\`\`javascript
console.log("start");
setTimeout(() => console.log("timeout"), 0);
Promise.resolve().then(() => console.log("promise"));
console.log("end");
// Output: start → end → promise → timeout
\`\`\``,
  tags: ['Event Loop', 'Execution Order', 'Microtasks'],
}
