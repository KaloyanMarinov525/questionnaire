import type { Question } from '../../types'

export const classKeyword: Question = {
  id: 'fc91ccba-fe30-4562-8802-f30fa77684f7',
  title: `What is a class`,
  answer: `A class in JavaScript is a blueprint for creating objects with shared structure and behavior. It supports properties (data fields) and methods (functions). Classes are syntactic sugar over JavaScript's prototype-based inheritance, making object-oriented patterns easier to use.

Example:
\`\`\`javascript
class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    return \`Hello, I'm \${this.name}\`;
  }
}
const anna = new Person("Anna");
console.log(anna.greet()); // Hello, I'm Anna
\`\`\``,
  tags: ['Class', 'OOP', 'JavaScript'],
}
