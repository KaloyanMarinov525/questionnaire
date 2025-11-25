import { createQuestionId } from '../../types'
import type { Question } from '../../types'

export const zustand_actions_reducers: Question = {
  id: createQuestionId('61a56156-3c75-45ce-9f75-4030e5127a12'),
  title: `Does Zustand have actions and reducers similar to Redux`,
  answer: `Zustand doesn't enforce the actions/reducers pattern like Redux does. Instead:
- State and actions live together in the same store.
- Actions are just functions that update the state with the set function.
- You can still implement a reducer-style store if you prefer, using set with a reducer function.

Example (typical Zustand style):
\`\`\`javascript
import create from 'zustand';
const useStore = create(set => ({
  count: 0,
  increase: () => set(state => ({ count: state.count + 1 })),
  decrease: () => set(state => ({ count: state.count - 1 })),
}));
\`\`\`

Example (Redux-like with reducer):
\`\`\`javascript
import create from 'zustand';
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
};
const useStore = create(set => ({
  count: 0,
  dispatch: action => set(state => reducer(state, action)),
}));
\`\`\`

So: Zustand supports both simple actions and reducer-style logic, but keeps things more flexible and lightweight than Redux.`,
  tags: ['Zustand', 'Redux', 'State Management'],
}
