import { createQuestionId } from '../../types'
import type { Question } from '../../types'

export const hoc_example: Question = {
  id: createQuestionId('3887714c-d8f6-4e0f-84cb-7ffbed8c8de9'),
  title: `Give me example for HOC`,
  answer: `A Higher-Order Component (HOC) is a function that takes a component and returns a new component with extended behavior.

Example:
\`\`\`javascript
// HOC that adds loading logic
function withLoading(Component) {
  return function WrappedComponent({ isLoading, ...props }) {
    if (isLoading) return <div>Loading...</div>;
    return <Component {...props} />;
  };
}
// Usage
function UserList({ users }) {
  return <ul>{users.map(u => <li key={u.id}>{u.name}</li>)}</ul>;
}
const UserListWithLoading = withLoading(UserList);
\`\`\``,
  tags: ['HOC', 'Higher-Order Component', 'Pattern'],
}
