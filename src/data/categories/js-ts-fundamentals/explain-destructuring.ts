import { createQuestionId } from '../../types'
import type { Question } from '../../types'

export const explain_destructuring: Question = {
  id: createQuestionId('8acf0a70-9418-4c3a-b8ec-5cfe5f455ef9'),
  title: `Explain destructuring`,
  answer: `Destructuring is a JavaScript syntax that lets you unpack values from arrays or properties from objects into variables in a concise way.

Example with objects:
\`\`\`javascript
const user = { name: "Anna", age: 25 };
const { name, age } = user;
console.log(name, age); // Anna 25
\`\`\`

Example with arrays:
\`\`\`javascript
const numbers = [1, 2, 3];
const [first, second] = numbers;
console.log(first, second); // 1 2
\`\`\`

In React, destructuring is often used with props or hook returns (const [state, setState] = useState(0)).`,
  tags: ['Destructuring', 'Syntax', 'ES6'],
}
