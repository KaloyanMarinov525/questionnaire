import { createQuestionId } from '../../types'
import type { Question } from '../../types'

export const react_memo_with_hooks: Question = {
  id: createQuestionId('18e287c1-7e67-4c7f-9af3-282472546317'),
  title: `Why do we combine React.memo with useCallback / useMemo`,
  answer: `Because React.memo does a shallow comparison of props.
- If you pass objects, arrays, or functions, new references are created on each render.
- Even though their contents didn't change, React thinks the props changed → child rerenders.

\`\`\`javascript
<Child data={[1,2,3]} /> // ❌ new array each time
<Child onClick={() => {}} /> // ❌ new function each time
\`\`\`

In these cases, we wrap the value/function with useMemo or useCallback to stabilize the reference, so that React.memo can effectively skip re-renders.

Summary:
- Yes, you can use React.memo alone → good for props that are primitives or stable.
- Use with useMemo / useCallback → when passing objects, arrays, or functions that would otherwise break memoization.`,
  tags: ['React.memo', 'useCallback', 'useMemo'],
}
