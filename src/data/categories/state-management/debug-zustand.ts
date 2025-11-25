import { createQuestionId } from '../../types'
import type { Question } from '../../types'

export const debug_zustand: Question = {
  id: createQuestionId('85bcd289-e326-4b12-b793-46eb7c26f8dd'),
  title: `How do you debug Zustand state`,
  answer: `Zustand offers built-in support for debugging and several techniques:

Zustand Devtools middleware:
Install the Redux DevTools extension in your browser, then wrap your store with the devtools middleware:
\`\`\`javascript
import create from 'zustand';
import { devtools } from 'zustand/middleware';
const useStore = create(
  devtools(set => ({
    count: 0,
    increase: () => set(state => ({ count: state.count + 1 })),
  }))
);
\`\`\`
→ You can now inspect actions and state changes in Redux DevTools.

Console logging inside actions:
Add logs in actions to trace updates:
\`\`\`javascript
increase: () =>
  set(state => {
    console.log("count before:", state.count);
    return { count: state.count + 1 };
  }),
\`\`\`

Custom selectors:
Use selectors to subscribe to specific parts of the state and log rerenders:
\`\`\`javascript
const count = useStore(state => state.count);
useEffect(() => console.log("count changed:", count), [count]);
\`\`\`

Persistence middleware:
With persist, you can persist state to storage and inspect it between reloads.`,
  tags: ['Zustand', 'State Management', 'Debugging'],
}
