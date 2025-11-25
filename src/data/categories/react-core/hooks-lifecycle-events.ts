import type { Question } from '../../types'

export const hooks_lifecycle_events: Question = {
  id: '750424ae-cfea-4050-bc67-24796974b808',
  title: `Give examples of how we use hooks to imitate different lifecycle events`,
  answer: `ComponentDidMount (run once on mount):
\`\`\`javascript
useEffect(() => {
  console.log("Mounted");
}, []);
\`\`\`

ComponentDidUpdate (run on state/prop change):
\`\`\`javascript
useEffect(() => {
  console.log("Count updated");
}, [count]);
\`\`\`

ComponentWillUnmount (cleanup on unmount):
\`\`\`javascript
useEffect(() => {
  const id = setInterval(tick, 1000);
  return () => clearInterval(id);
}, []);
\`\`\``,
  tags: ['useEffect', 'Lifecycle', 'Hooks'],
}
