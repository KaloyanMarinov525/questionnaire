import type { Question } from '../../types'

export const interface_in_react: Question = {
  id: '85907945-bb65-4744-941f-bc5d28e80d3e',
  title: `When to use interface in React projects`,
  answer: `Interfaces are better when describing props or object structures, because they are extendable and easier to read. They also support declaration merging, making them ideal for contracts between components or classes.

Example:
\`\`\`typescript
interface ButtonProps {
  label: string;
  onClick: () => void;
}
function Button({ label, onClick }: ButtonProps) {
  return <button onClick={onClick}>{label}</button>;
}
\`\`\``,
  tags: ['TypeScript', 'Interfaces', 'React Props'],
}
