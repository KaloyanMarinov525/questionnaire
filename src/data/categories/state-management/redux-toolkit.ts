import type { Question } from '../../types'

export const redux_toolkit: Question = {
  id: '418d4570-014e-438d-bea4-21eb7081a316',
  title: `Explain Redux Toolkit`,
  answer: `Redux Toolkit (RTK) is the official, recommended way to write Redux logic. It simplifies Redux by reducing boilerplate and providing opinionated utilities for common patterns like reducers, actions, and async logic.

Key features:
- configureStore: sets up the Redux store with good defaults (DevTools, middleware, immutability checks).
- createSlice: generates reducers and actions together in one place.
- createAsyncThunk: simplifies async requests and dispatching loading/success/error states.
- Immer integration: lets you write "mutating" logic in reducers while keeping immutability under the hood.
- Built-in middleware: for handling async code, dev logging, and immutability.

Example:
\`\`\`javascript
import { configureStore, createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async action
export const fetchUser = createAsyncThunk('user/fetch', async id => {
  const res = await fetch(\`/api/user/\${id}\`);
  return res.json();
});

const userSlice = createSlice({
  name: 'user',
  initialState: { data: null, loading: false },
  reducers: {
    clearUser: state => {
      state.data = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchUser.pending, state => {
        state.loading = true;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchUser.rejected, state => {
        state.loading = false;
      });
  },
});

export const { clearUser } = userSlice.actions;
export const store = configureStore({
  reducer: { user: userSlice.reducer },
});
\`\`\``,
  tags: ['Redux Toolkit', 'State Management', 'RTK'],
}
