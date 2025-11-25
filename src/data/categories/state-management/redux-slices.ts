import type { Question } from '../../types'

export const redux_slices: Question = {
  id: '4ad1142e-5a85-47bc-a0a0-31dda071430d',
  title: `Explain slices in modern Redux Toolkit`,
  answer: `In Redux Toolkit, a slice is a collection of logic for a specific feature of your app. Each slice bundles together:
● Name: the slice's namespace (used to prefix actions).
● Initial state: the default state for that feature.
● Reducers: functions that define how state changes in response to actions.
● Actions: auto-generated from the reducers.

This reduces boilerplate compared to classic Redux where actions, constants, and reducers had to be defined separately.

Example:
\`\`\`javascript
import { createSlice, configureStore } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: state => { state.value += 1; },
    decrement: state => { state.value -= 1; },
    incrementByAmount: (state, action) => { state.value += action.payload; },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export const store = configureStore({
  reducer: { counter: counterSlice.reducer },
});
\`\`\`

Here counterSlice generates both the reducer and the action creators (increment, decrement, etc.).`,
  tags: ['Redux Toolkit', 'Slice', 'State Management'],
}
