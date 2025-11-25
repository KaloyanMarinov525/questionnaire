import { createQuestionId } from '../../types'
import type { Question } from '../../types'

export const forms: Question = {
  id: createQuestionId('f13d8beb-9eac-42f6-a3ed-8df7bb2bc49e'),
  title: `How do we create forms in React`,
  answer: `Forms in React are usually controlled components: input values are stored in state and updated via onChange handlers. Example:
\`\`\`javascript
function MyForm() {
  const [name, setName] = useState("");
  return (
    <form>
      <input value={name} onChange={e => setName(e.target.value)} />
    </form>
  );
}
\`\`\`

For complex forms, libraries like Formik or React Hook Form provide validation, error handling, and better performance.`,
  tags: ['Forms', 'Controlled Components', 'useState'],
}
