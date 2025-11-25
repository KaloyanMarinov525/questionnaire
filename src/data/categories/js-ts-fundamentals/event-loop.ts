import { createQuestionId } from '../../types'
import type { Question } from '../../types'

export const event_loop: Question = {
  id: createQuestionId('8cba7c66-7b18-48bd-b267-4bd374ab63ef'),
  title: `What is the Event Loop`,
  answer: `The event loop is the mechanism in JavaScript that coordinates the execution of code, handling of events, and execution of asynchronous tasks. Since JavaScript is single-threaded, the event loop ensures non-blocking behavior by managing the call stack, callback queue (macro-tasks), and microtask queue (promises, async/await).`,
  tags: ['Event Loop', 'Asynchronous', 'JavaScript'],
}
