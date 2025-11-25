import type { Question } from '../../types'

export const call_stack_pop: Question = {
  id: 'ba1a6e16-fb24-4653-81fa-e1b05270dc44',
  title: `When the function finishes, it's popped off the stack`,
  answer: `JavaScript is single-threaded, so it executes one function at a time from the call stack.

Example:
\`\`\`javascript
function a() { console.log("a"); }
function b() { a(); console.log("b"); }
b();
// Order: a → b
\`\`\`

● Queue (Callback / Task Queue & Microtask Queue)
When async tasks (like setTimeout, promises, or events) complete, their callbacks are placed in a queue.
Event loop checks if the call stack is empty → if yes, it pushes the next callback from the queue to the stack.
There are two main queues:
■ Macro-task queue: setTimeout, setInterval, DOM events.
■ Micro-task queue: Promises, queueMicrotask, MutationObserver (higher priority, executed before macro-tasks).

Example:
\`\`\`javascript
console.log("start");
setTimeout(() => console.log("timeout"), 0);
Promise.resolve().then(() => console.log("promise"));
console.log("end");
// Output: start → end → promise → timeout
\`\`\``,
  tags: ['Call Stack', 'Queue', 'Event Loop'],
}
