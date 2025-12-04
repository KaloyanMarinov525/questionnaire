import { createQuestionId } from '../../types'
import type { Question } from '../../types'

export const react_memo_without_hooks: Question = {
  id: createQuestionId('47ea8745-cd1f-4f0a-86e7-c2c342e17819'),
  title: `Can you use React.memo without useCallback / useMemo`,
  answer: `Yes — you can use React.memo on its own. It works perfectly fine if the props you pass are primitives (string, number, boolean) or stable references that don't change between renders.

Example (no useCallback / useMemo needed):
\`\`\`javascript
const Child = React.memo(({ value }: { value: number }) => {
  console.log("Child rendered");

  return <div>{value}</div>;
});

function Parent() {
  const [count, React.useState(0);

  return (
    <div>
      <button onClick={() => setCount(c => c + 1)}>Increment</button>
      <Child value={42} /> {/* value never changes → Child won't re-render */}
    </div>
  );
}
\`\`\``,
  tags: ['React.memo', 'Hooks', 'Props'],
}
