import type { Question } from '../../types'

export const react_memo: Question = {
  id: '2a393d9e-d623-46e1-bb35-f0c6e139439b',
  title: `What is React.memo`,
  answer: `React.memo is a higher-order component (HOC) that tells React: "Only re-render this component if its props actually change." By default, when a parent re-renders, all its children re-render too. With React.memo, React will skip re-rendering a child if its props are the same as before (shallow comparison).

Example:
\`\`\`javascript
import React, { useState, memo } from "react";
const Child = memo(({ value }: { value: number }) => {
  console.log("Child rendered");
  return <div>Value: {value}</div>;
});
export default function Parent() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(c => c + 1)}>Increment</button>
      <Child value={42} />
    </div>
  );
}
\`\`\`

- Without React.memo: Child re-renders every time Parent re-renders.
- With React.memo: Child won't re-render unless the value prop changes.`,
  tags: ['React.memo', 'Performance', 'HOC'],
}
