import { createQuestionId } from '../../types'
import type { Question } from '../../types'

export const abstract_class: Question = {
  id: createQuestionId('2bbf027a-4275-4986-b857-c0e2cb5ffe71'),
  title: `What is an abstract class`,
  answer: `An abstract class is a class that cannot be instantiated directly. It defines a common structure or contract for its subclasses. Abstract classes can include both implemented methods and abstract methods (methods without implementation) that must be defined in child classes. In JavaScript/TypeScript, abstract classes are mostly used in TypeScript for type safety and design patterns.

TypeScript Example:
\`\`\`typescript
abstract class Animal {
  abstract makeSound(): void; // must be implemented in subclasses

  move(): void {
    console.log("Moving...");
  }
}

class Dog extends Animal {
  makeSound(): void {
    console.log("Woof!");
  }
}

const dog = new Dog();

dog.makeSound(); // Woof!
dog.move(); // Moving...
\`\`\``,
  tags: ['Abstract Class', 'TypeScript', 'OOP'],
}
