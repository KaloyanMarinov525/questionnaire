import type { Category } from './types'

export const questions: Array<Category> = [
  {
    id: 'networking-apis',
    name: 'Networking & APIs',
    description: 'REST, WebSockets, HTTP interceptors',
    color: 'from-blue-500 to-blue-600',
    questions: [
      {
        id: 'q1-1',
        title: 'Explain different ways for communication with a server',
        answer: `● REST API: Standard HTTP requests (GET, POST, PUT, DELETE) using fetch or Axios.
● WebSockets: Persistent, bidirectional connection for real-time data (e.g., chats, live updates).`,
        tags: ['REST', 'WebSockets', 'Communication'],
      },
      {
        id: 'q1-2',
        title: 'What is HTTP interceptor',
        answer: `An HTTP interceptor is a middleware layer for requests and responses. It allows you to automatically attach headers (like authentication tokens), log traffic, handle errors globally, or modify responses before they reach the application. In React, this is often implemented with Axios interceptors or fetch wrappers.`,
        tags: ['HTTP', 'Interceptor', 'Middleware'],
      },
    ],
  },
  {
    id: 'js-ts-fundamentals',
    name: 'JavaScript/TypeScript Fundamentals',
    description: 'Event loop, promises, types, design patterns',
    color: 'from-yellow-500 to-yellow-600',
    questions: [
      {
        id: 'q2-1',
        title: 'Explain JavaScript Single-Thread',
        answer: `JavaScript is single-threaded, meaning it has one call stack and can execute one task at a time. Unlike multi-threaded languages, it doesn't run multiple pieces of code simultaneously in the same process.

● Single call stack: all synchronous code runs line by line.
● Asynchronous behavior: achieved not by multiple threads, but by the event loop delegating tasks to the browser (or Node.js APIs) and then queueing callbacks.
● Non-blocking I/O: while JS is single-threaded, heavy operations like timers, network requests, or file access are offloaded to the environment; JS gets the result later via callbacks, promises, or async/await.

Example:
\`\`\`javascript
console.log("start");
setTimeout(() => console.log("timeout"), 0);
console.log("end");
// Output: start → end → timeout
\`\`\`

Even though setTimeout is 0ms, the callback waits until the stack is clear because only one thread executes JS.`,
        tags: ['JavaScript', 'Event Loop', 'Threading'],
      },
      {
        id: 'q2-2',
        title: "When a function is called, it's pushed onto the stack",
        answer: `JavaScript is single-threaded, so it executes one function at a time from the call stack.

Example:
\`\`\`javascript
function a() { console.log("a"); }
function b() { a(); console.log("b"); }
b();
// Order: a → b
\`\`\``,
        tags: ['Call Stack', 'Execution', 'Stack'],
      },
      {
        id: 'q2-3',
        title: "When the function finishes, it's popped off the stack",
        answer: `JavaScript is single-threaded, so it executes one function at a time from the call stack.

Example:
\`\`\`javascript
function a() { console.log("a"); }
function b() { a(); console.log("b"); }
b();
// Order: a → b
\`\`\`

● Queue (Callback / Task Queue & Microtask Queue)
When async tasks (like setTimeout, promises, or events) complete, their callbacks are placed in a queue.
Event loop checks if the call stack is empty → if yes, it pushes the next callback from the queue to the stack.
There are two main queues:
■ Macro-task queue: setTimeout, setInterval, DOM events.
■ Micro-task queue: Promises, queueMicrotask, MutationObserver (higher priority, executed before macro-tasks).

Example:
\`\`\`javascript
console.log("start");
setTimeout(() => console.log("timeout"), 0);
Promise.resolve().then(() => console.log("promise"));
console.log("end");
// Output: start → end → promise → timeout
\`\`\``,
        tags: ['Call Stack', 'Queue', 'Event Loop'],
      },
      {
        id: 'q2-4',
        title: 'What is the Event Loop',
        answer: `The event loop is the mechanism in JavaScript that coordinates the execution of code, handling of events, and execution of asynchronous tasks. Since JavaScript is single-threaded, the event loop ensures non-blocking behavior by managing the call stack, callback queue (macro-tasks), and microtask queue (promises, async/await).`,
        tags: ['Event Loop', 'Asynchronous', 'JavaScript'],
      },
      {
        id: 'q2-5',
        title: 'How the Event Loop works',
        answer: `1. Execute synchronous code from the call stack.
2. When async tasks finish (like setTimeout, API calls, promises), their callbacks go into queues.
3. The event loop checks:
   ○ If the stack is empty → it first processes microtasks (promises).
   ○ Then it processes macro-tasks (timeouts, events).
4. This cycle repeats endlessly, giving the illusion of concurrency.

Example:
\`\`\`javascript
console.log("start");
setTimeout(() => console.log("timeout"), 0);
Promise.resolve().then(() => console.log("promise"));
console.log("end");
// Output: start → end → promise → timeout
\`\`\``,
        tags: ['Event Loop', 'Execution Order', 'Microtasks'],
      },
      {
        id: 'q2-6',
        title: 'Explain destructuring',
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
      },
      {
        id: 'q2-7',
        title: 'What is a class',
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
      },
      {
        id: 'q2-8',
        title: 'What is an abstract class',
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
      },
      {
        id: 'q2-9',
        title:
          'What is the difference between private, protected, and public access modifiers',
        answer: `● public
  ○ Default in TypeScript/JS classes.
  ○ Members are accessible everywhere (inside and outside the class).
● protected
  ○ Members are accessible inside the class and its subclasses.
  ○ Not accessible outside of them.
● private
  ○ Members are only accessible inside the class where they are defined.
  ○ Not accessible in subclasses or from outside.

TypeScript Example:
\`\`\`typescript
class Person {
  public name: string;
  protected age: number;
  private ssn: string;
  constructor(name: string, age: number, ssn: string) {
    this.name = name;
    this.age = age;
    this.ssn = ssn;
  }
}
class Employee extends Person {
  getDetails() {
    return \`\${this.name}, \${this.age}\`; // OK (age is protected)
    // return this.ssn; ❌ Error (private)
  }
}
const emp = new Employee("Anna", 30, "123-45-6789");
console.log(emp.name); // ✅ Public
// console.log(emp.age); ❌ Error
// console.log(emp.ssn); ❌ Error
\`\`\``,
        tags: ['Access Modifiers', 'TypeScript', 'Encapsulation'],
      },
      {
        id: 'q2-10',
        title: 'What are design patterns and can you name some of them',
        answer: `Design patterns are proven, reusable solutions to common software design problems. They are not code snippets, but templates for solving issues in a consistent and maintainable way.

Examples of design patterns:
● Singleton: ensures only one instance of a class exists.
● Factory: creates objects without exposing the creation logic.
● Observer (Pub/Sub): notifies multiple subscribers when a subject changes.
● Strategy: defines a family of algorithms and makes them interchangeable.
● Decorator: adds behavior to objects dynamically without changing their code.`,
        tags: ['Design Patterns', 'Architecture', 'Software Design'],
      },
      {
        id: 'q2-11',
        title: 'How does TypeScript work and what are its benefits',
        answer: `TypeScript is a superset of JavaScript that adds static typing. Code is written in .ts files, compiled (transpiled) by the TypeScript compiler (tsc) into plain JavaScript that browsers can run.

Benefits:
● Type safety: catches errors at compile time instead of runtime.
● Better tooling: autocompletion, IntelliSense, and refactoring in IDEs.
● Readability & maintainability: types make contracts between components clear.
● Scalability: large projects are easier to manage with strict typing.
● Modern JS features: support for latest ECMAScript features before native adoption.`,
        tags: ['TypeScript', 'Type Safety', 'Compilation'],
      },
      {
        id: 'q2-12',
        title:
          'What is the difference between type and interface in TypeScript',
        answer: `● interface
  ○ Designed to describe the shape (structure) of objects, classes, or functions.
  ○ Supports declaration merging (you can extend the same interface in multiple places).
  ○ Better for defining contracts in OOP-style code (classes can implements an interface).
● type
  ○ More flexible – can define not only object shapes, but also unions, intersections, primitives, tuples, etc.
  ○ Cannot merge declarations (once declared, it's final).
  ○ Useful for complex type combinations.

Example:
\`\`\`typescript
interface User {
  name: string;
  age: number;
}
type ID = string | number; // union type
\`\`\``,
        tags: ['TypeScript', 'Types', 'Interfaces'],
      },
      {
        id: 'q2-13',
        title: 'When to use interface in React projects',
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
      },
      {
        id: 'q2-14',
        title: 'When to use type in React projects',
        answer: `Types are better for unions, intersections, tuples, and primitives. They are more flexible when combining different kinds of definitions.

Example:
\`\`\`typescript
type Size = "small" | "medium" | "large";
type ButtonVariant = {
  primary: boolean;
} & { size: Size };
const variant: ButtonVariant = { primary: true, size: "medium" };
\`\`\``,
        tags: ['TypeScript', 'Types', 'Unions'],
      },
      {
        id: 'q2-15',
        title: 'What is a tuple',
        answer: `A tuple in TypeScript is a fixed-length array with predefined types for each element. Unlike normal arrays, each position in a tuple can have a different type, and the order matters.

Example:
\`\`\`typescript
let user: [string, number];
user = ["Anna", 25]; // ✅ valid
// user = [25, "Anna"]; ❌ error (wrong order)
\`\`\`

Tuples are often used for returning multiple values from a function or representing structured data.`,
        tags: ['TypeScript', 'Tuple', 'Types'],
      },
      {
        id: 'q2-16',
        title: 'What is hoisting',
        answer: `Hoisting is JavaScript's behavior of moving declarations to the top of their scope during compilation. Variables declared with var are hoisted and initialized with undefined. Functions declared with function are hoisted fully (can be called before definition). Variables declared with let and const are hoisted too but stay in the Temporal Dead Zone until their declaration is executed.

Example:
\`\`\`javascript
console.log(a); // undefined
var a = 5;
foo(); // works
function foo() {
  console.log("Hello");
}
console.log(b); // ❌ ReferenceError
let b = 10;
\`\`\``,
        tags: ['Hoisting', 'JavaScript', 'Variable Declaration'],
      },
      {
        id: 'q2-17',
        title: 'Are functions hoisted',
        answer: `Yes — but not only for functions. Function declarations are fully hoisted, so you can call them before their definition.

Example:
\`\`\`javascript
greet(); // ✅ works
function greet() {
  console.log("Hello!");
}
\`\`\`

But with variables, it's different:
● var → hoisted but initialized with undefined.
● let / const → hoisted, but in the Temporal Dead Zone, so you get an error if accessed before definition.`,
        tags: ['Hoisting', 'Functions', 'Temporal Dead Zone'],
      },
      {
        id: 'q2-18',
        title: 'Explain callback',
        answer: `A callback is a function passed as an argument to another function, so it can be executed later, usually after some operation is complete. Callbacks are common in asynchronous code, like handling API responses or events.

Example:
\`\`\`javascript
function fetchData(callback) {
  setTimeout(() => {
    callback("Data loaded");
  }, 1000);
}
fetchData(result => {
  console.log(result); // Data loaded
});
\`\`\``,
        tags: ['Callback', 'Asynchronous', 'Functions'],
      },
      {
        id: 'q2-19',
        title: 'Explain what is wrong with callbacks',
        answer: `Callbacks work, but they have several drawbacks:
● Callback Hell: nested callbacks make code deeply indented and hard to read/maintain.
● Error handling issues: mixing success and error callbacks is messy.
● Inversion of control: passing control to external code can lead to unexpected behavior.
● Hard to compose: chaining multiple async tasks becomes complicated.

That's why Promises and later async/await were introduced — to make asynchronous code cleaner, more predictable, and easier to manage.`,
        tags: ['Callback', 'Asynchronous', 'Anti-pattern'],
      },
      {
        id: 'q2-20',
        title: 'Explain promise',
        answer: `A Promise in JavaScript is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. It has three states:
● pending → initial state, operation not finished yet.
● fulfilled → operation completed successfully.
● rejected → operation failed with an error.

You handle results with .then() and .catch(), or with async/await for cleaner syntax.

Example:
\`\`\`javascript
const fetchData = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Data loaded"), 1000);
});
fetchData
  .then(data => console.log(data))
  // Data loaded
  .catch(error => console.error(error));
\`\`\``,
        tags: ['Promise', 'Asynchronous', 'JavaScript'],
      },
      {
        id: 'q2-21',
        title: 'Explain async/await',
        answer: `async/await is syntactic sugar built on top of Promises. An async function always returns a Promise. Inside it, you can use await to pause execution until a Promise resolves (or rejects). This makes asynchronous code look and behave more like synchronous code, improving readability and error handling.

Example:
\`\`\`javascript
async function getData() {
  try {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
}
getData();
\`\`\``,
        tags: ['Async/Await', 'Promise', 'Asynchronous'],
      },
      {
        id: 'q2-22',
        title: 'Does every function have the ability to become async',
        answer: `Yes — in JavaScript you can declare any function as async. When you do, it will always return a Promise, even if you return a plain value. Inside an async function you can use await to pause execution until a Promise resolves.

Example:
\`\`\`javascript
async function add(a, b) {
  return a + b; // actually returns Promise<number>
}
add(2, 3).then(result => console.log(result)); // 5
\`\`\`

However, await only makes sense inside async functions, and turning every function into async unnecessarily can make code harder to reason about.`,
        tags: ['Async', 'Promise', 'Functions'],
      },
      {
        id: 'q2-23',
        title: 'Explain the difference between try/catch and promises',
        answer: `try/catch is for handling errors in synchronous code and async/await. Promises use .then() and .catch() for handling success and error states.

Try/Catch (works with async/await):
\`\`\`javascript
async function getData() {
  try {
    const data = await fetch('/api/data');
    return data;
  } catch (error) {
    console.error(error);
  }
}
\`\`\`

Promise .catch():
\`\`\`javascript
fetch('/api/data')
  .then(data => console.log(data))
  .catch(error => console.error(error));
\`\`\`

Try/catch is generally cleaner and easier to read.`,
        tags: ['Error Handling', 'Promise', 'Async/Await'],
      },
      {
        id: 'q2-24',
        title: 'What is the difference between null and undefined',
        answer: `● undefined: a value that indicates a variable has been declared but hasn't been assigned a value, or a function has no return value.
● null: a value deliberately assigned to represent "no value" or "empty".

Example:
\`\`\`javascript
let a; // undefined (declared but not assigned)
let b = null; // null (deliberately assigned)

function noReturn() {} // returns undefined

const obj = { x: null }; // deliberately empty
\`\`\`

typeof undefined returns "undefined"
typeof null returns "object" (this is actually a bug in JavaScript)

Use undefined for uninitialized variables, null for intentional absence of value.`,
        tags: ['Types', 'JavaScript', 'Values'],
      },
    ],
  },
  {
    id: 'react-core',
    name: 'React Core Concepts',
    description: 'Components, hooks, lifecycle, reconciliation',
    color: 'from-cyan-500 to-cyan-600',
    questions: [
      {
        id: 'q3-1',
        title: 'What is React',
        answer: `React is a declarative, component-based JavaScript library for building user interfaces. It uses a virtual DOM for efficient rendering and supports both client- and server-side rendering.`,
        tags: ['React', 'Library', 'UI'],
      },
      {
        id: 'q3-2',
        title: 'Explain how React works',
        answer: `React builds a virtual representation of the UI (Virtual DOM) in memory. When state or props change, it diffs the new virtual tree against the old one and efficiently updates only the changed parts in the real DOM. This makes UI updates predictable and performant.`,
        tags: ['React', 'Virtual DOM', 'Rendering'],
      },
      {
        id: 'q3-3',
        title: 'What is reconciliation',
        answer: `Reconciliation is the process React uses to update the DOM (or native UI in RN) when a component's state or props change. React creates a new virtual DOM tree, compares it with the previous one using a diffing algorithm, and then updates only the parts of the real DOM that changed (not the whole tree).

Key points:
● Uses the virtual DOM to minimize costly DOM operations.
● By default, React assumes elements of the same type can be reused.
● Keys help React optimize reconciliation when dealing with lists (to track elements correctly).
● In React 18+, reconciliation works with concurrent rendering, allowing React to pause, interrupt, and resume rendering for a smoother UI.`,
        tags: ['Reconciliation', 'Diffing', 'Virtual DOM'],
      },
      {
        id: 'q3-4',
        title: 'Will a parent state change and re-render a child component',
        answer: `Yes — in React, when a parent re-renders, all of its children are also re-rendered by default. This happens even if the child's props didn't change, because React reconciles the whole subtree.

However, the actual DOM update only happens if something in the child's rendered output changes (thanks to reconciliation).`,
        tags: ['Re-render', 'Parent-Child', 'State'],
      },
      {
        id: 'q3-5',
        title: 'How to prevent unnecessary child re-renders',
        answer: `● Wrap child with React.memo → skips re-render if props are shallowly equal.
● Use useCallback / useMemo in the parent to keep function/prop references stable.
● Lift state only when necessary, avoid keeping parent state that forces unnecessary rerenders.`,
        tags: ['Performance', 'React.memo', 'Optimization'],
      },
      {
        id: 'q3-6',
        title: 'What is React.memo',
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

● Without React.memo: Child re-renders every time Parent re-renders.
● With React.memo: Child won't re-render unless the value prop changes.`,
        tags: ['React.memo', 'Performance', 'HOC'],
      },
      {
        id: 'q3-7',
        title: 'When to use React.memo',
        answer: `Useful when:
● A component receives stable props (numbers, strings, memoized objects/functions).
● Re-renders are expensive (big trees, heavy rendering).

Don't overuse:
● If props change frequently, React.memo adds overhead without benefit.
● Doesn't help if you pass new references (objects/functions) each time → use useMemo or useCallback to stabilize them.`,
        tags: ['React.memo', 'Performance', 'Optimization'],
      },
      {
        id: 'q3-8',
        title: 'Can you use React.memo without useCallback / useMemo',
        answer: `Yes — you can use React.memo on its own. It works perfectly fine if the props you pass are primitives (string, number, boolean) or stable references that don't change between renders.

Example (no useCallback / useMemo needed):
\`\`\`javascript
const Child = React.memo(({ value }: { value: number }) => {
  console.log("Child rendered");
  return <div>{value}</div>;
});
function Parent() {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <button onClick={() => setCount(c => c + 1)}>Increment</button>
      <Child value={42} /> {/* value never changes → Child won't re-render */}
    </div>
  );
}
\`\`\``,
        tags: ['React.memo', 'Hooks', 'Props'],
      },
      {
        id: 'q3-9',
        title: 'Why do we combine React.memo with useCallback / useMemo',
        answer: `Because React.memo does a shallow comparison of props.
● If you pass objects, arrays, or functions, new references are created on each render.
● Even though their contents didn't change, React thinks the props changed → child rerenders.

\`\`\`javascript
<Child data={[1,2,3]} /> // ❌ new array each time
<Child onClick={() => {}} /> // ❌ new function each time
\`\`\`

In these cases, we wrap the value/function with useMemo or useCallback to stabilize the reference, so that React.memo can effectively skip re-renders.

Summary:
● Yes, you can use React.memo alone → good for props that are primitives or stable.
● Use with useMemo / useCallback → when passing objects, arrays, or functions that would otherwise break memoization.`,
        tags: ['React.memo', 'useCallback', 'useMemo'],
      },
      {
        id: 'q3-10',
        title: 'What is JSX',
        answer: `JSX (JavaScript XML) is a syntax extension for JavaScript that lets you write HTML-like code inside React. It makes UI structure easier to describe, but under the hood it compiles to React.createElement calls that build the virtual DOM.`,
        tags: ['JSX', 'Syntax', 'React'],
      },
      {
        id: 'q3-11',
        title: 'What is a component in React',
        answer: `A component is a reusable, self-contained unit of UI. It can be a function or a class that returns React elements, accepts props as input, and can manage its own state. Components make complex UIs easier to build and maintain.`,
        tags: ['Component', 'Reusable', 'React'],
      },
      {
        id: 'q3-12',
        title: 'Explain functional component',
        answer: `A functional component is a plain JavaScript function that returns React elements (JSX). It can accept props as arguments and use hooks (useState, useEffect, etc.) to manage state and side effects. Functional components are the modern standard, simpler and more performant than class components.`,
        tags: ['Functional Component', 'Hooks', 'React'],
      },
      {
        id: 'q3-13',
        title: 'Explain lifecycle of a React component',
        answer: `In modern React, the lifecycle is handled mostly through hooks. Functional components use useEffect to run code after render, on updates, or during cleanup. Class components follow three states: mounting (constructor, render, componentDidMount), updating (render, componentDidUpdate), and unmounting (componentWillUnmount).`,
        tags: ['Lifecycle', 'Hooks', 'useEffect'],
      },
      {
        id: 'q3-14',
        title:
          'Give examples of how we use hooks to imitate different lifecycle events',
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
      },
      {
        id: 'q3-15',
        title: 'What is a hook',
        answer: `A hook is a special function in React that lets you "hook into" React's features like state, lifecycle, and context inside functional components. Examples include useState, useEffect, and useContext. Hooks remove the need for most class components.`,
        tags: ['Hook', 'useState', 'useEffect'],
      },
      {
        id: 'q3-16',
        title: 'What kinds of state do you know',
        answer: `● Local/UI state: values managed inside a component with useState.
● Derived state: computed from props or other state using useMemo.
● Global/shared state: data shared across components using Context, Redux, or Zustand.
● Server/async state: remote data handled with tools like React Query or SWR.
● URL/router state: state synced with the browser URL via React Router or Next.js.`,
        tags: ['State', 'useState', 'State Management'],
      },
      {
        id: 'q3-17',
        title: 'Explain navigation in React',
        answer: `Navigation in React is usually managed with routing libraries. The most common is React Router, which maps URLs to components using <Routes> and <Route>. In frameworks like Next.js, navigation is file-based and handled via <Link> and router hooks. Navigation updates the URL, renders the correct component, and preserves state where needed.`,
        tags: ['Navigation', 'Routing', 'React Router'],
      },
      {
        id: 'q3-18',
        title: 'How do we list data in React',
        answer: `We map over arrays and return React elements for each item:
\`\`\`javascript
{items.map(item => (
  <li key={item.id}>{item.name}</li>
))}
\`\`\`

Each element should have a unique key prop for efficient reconciliation.`,
        tags: ['List', 'Map', 'Keys'],
      },
      {
        id: 'q3-19',
        title: 'How do we make API requests in React',
        answer: `API requests are usually made with fetch or libraries like Axios. The common pattern is to call the API inside useEffect, store the data in state with useState, and handle loading/error states. For advanced use, libraries like React Query or SWR manage caching, retries, and background updates.`,
        tags: ['API', 'fetch', 'useEffect'],
      },
      {
        id: 'q3-20',
        title: 'How do you structure React components more efficiently',
        answer: `Prefer feature-based folders (by domain, not by type). Keep components small and single-purpose; compose them instead of nesting logic. Colocate everything a component needs (hooks, styles, tests). Extract side effects/data logic into custom hooks; keep components mostly presentational. Use TypeScript props for clear contracts and avoid prop drilling with context or a small store. Name files clearly (UserCard.tsx, useUser.ts).`,
        tags: ['Component Structure', 'Architecture', 'Best Practices'],
      },
      {
        id: 'q3-21',
        title: 'How does useMemo differ from useState',
        answer: `useState is for managing component state — it stores a value and provides a setter that triggers re-renders when updated.

useMemo does not store state; it memoizes a computed value during render and recalculates only when dependencies change. It doesn't trigger re-renders by itself.`,
        tags: ['useMemo', 'useState', 'Hooks'],
      },
      {
        id: 'q3-22',
        title:
          'What is the square bracket in both useMemo and useCallback used for',
        answer: `The square brackets are the dependency array. They tell React when to recompute the memoized value (useMemo) or function (useCallback). If a dependency changes, the hook recalculates; if not, it reuses the cached result. An empty array ([]) means it runs only once on mount.`,
        tags: ['Dependency Array', 'useMemo', 'useCallback'],
      },
      {
        id: 'q3-23',
        title: 'What is memoization',
        answer: `Memoization is an optimization technique that stores the results of function calls and returns the cached result when the same inputs occur again. In React, hooks like useMemo and useCallback apply memoization to avoid unnecessary recalculations or re-creations of functions/values, improving performance.`,
        tags: ['Memoization', 'Performance', 'Optimization'],
      },
      {
        id: 'q3-24',
        title: 'How do we create forms in React',
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
      },
      {
        id: 'q3-25',
        title: 'Give me example for HOC',
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
      },
      {
        id: 'q3-26',
        title: 'Why did we stop using HOCs',
        answer: `HOCs were widely used for cross-cutting concerns (logging, fetching, theming), but they add nested component layers, make props tracing harder, and can conflict with static typing. With the introduction of hooks (useContext, useReducer, useCustomHooks), most HOC use cases became simpler, more explicit, and easier to compose without extra wrappers.`,
        tags: ['HOC', 'Hooks', 'Pattern Evolution'],
      },
      {
        id: 'q3-27',
        title: 'What kinds of hooks do you know',
        answer: `● Basic hooks: useState, useEffect, useContext. (Built-in)
● Performance hooks: useMemo, useCallback, useTransition, useDeferredValue.
● Refs & DOM hooks: useRef, useLayoutEffect, useImperativeHandle.
● Reducer hooks: useReducer for complex local state.
● Custom hooks: developer-defined, to encapsulate reusable logic.`,
        tags: ['Hooks', 'React', 'API'],
      },
      {
        id: 'q3-28',
        title:
          'What are Performance hooks: useMemo, useCallback, useTransition, useDeferredValue',
        answer: `● useMemo: Memoizes a computed value, recalculates only when dependencies change.
● useCallback: Memoizes a function to keep stable references between renders.
● useTransition: Marks state updates as non-urgent, allowing React to keep UI responsive.
● useDeferredValue: Defers updating a value until the UI is less busy, useful for expensive renders.`,
        tags: ['Performance Hooks', 'Optimization', 'React 18'],
      },
      {
        id: 'q3-29',
        title:
          'What are Refs & DOM hooks: useRef, useLayoutEffect, useImperativeHandle',
        answer: `● useRef: Stores a mutable value that persists across renders, often used for DOM access.
● useLayoutEffect: Runs synchronously after all DOM mutations, useful for measurements or DOM adjustments before painting.
● useImperativeHandle: Customizes the instance value exposed to parent components when using forwardRef.`,
        tags: ['useRef', 'DOM', 'Hooks'],
      },
      {
        id: 'q3-30',
        title: 'What is useReducer',
        answer: `useReducer is a React hook for managing complex or structured state. Instead of multiple useState calls, it uses a reducer function (state, action) => newState to handle state transitions. It provides better organization when state has multiple sub-values or depends on previous updates.`,
        tags: ['useReducer', 'State Management', 'Hooks'],
      },
    ],
  },
  {
    id: 'react-native',
    name: 'React Native',
    description: 'Navigation, debugging, Expo, native modules',
    color: 'from-purple-500 to-purple-600',
    questions: [
      {
        id: 'q4-1',
        title: 'What is React Native',
        answer: `React Native is a framework built by Meta that allows developers to build mobile apps for iOS and Android using React and JavaScript/TypeScript. It uses native components under the hood (via a bridge or the new Fabric/JSI architecture), so apps feel truly native while sharing most of the codebase across platforms.

Key benefits:
● Cross-platform: one codebase for iOS and Android.
● Native performance: uses real native UI components.
● Developer experience: fast refresh, large ecosystem, reuse of React skills.`,
        tags: ['React Native', 'Mobile', 'Cross-platform'],
      },
      {
        id: 'q4-2',
        title: 'Does React Native use HTML',
        answer: `No — React Native does not use HTML. Instead of <div>, <span>, or <p>, it provides its own set of native components like <View>, <Text>, and <Image>. These map directly to the corresponding native UI elements on iOS and Android, which is why React Native apps feel truly native.`,
        tags: ['React Native', 'Components', 'Native'],
      },
      {
        id: 'q4-3',
        title:
          'Explain routing in React Native and how it differs from React for web',
        answer: `In React Native, there is no built-in router. Navigation is handled with libraries such as React Navigation or React Native Navigation. These libraries manage navigation stacks, tabs, and drawers similar to native apps. Navigation works with concepts like StackNavigator, TabNavigator, and uses navigation props (navigation.navigate("Screen")).

In React for the web, routing is usually handled by React Router, which maps URLs to components. The browser's address bar and history API are central to web navigation, while in React Native navigation is managed in-app, not via URLs (although deep linking is possible).`,
        tags: ['React Native', 'Navigation', 'Routing'],
      },
      {
        id: 'q4-4',
        title: 'What concept does routing in React Native use',
        answer: `Routing in React Native is based on the concept of navigation stacks, tabs, and drawers, similar to native mobile apps. Libraries like React Navigation implement:
● Stack navigation → screens are pushed and popped like a call stack.
● Tab navigation → switching between screens with a bottom or top tab bar.
● Drawer navigation → side menu that slides in/out.

Unlike React for web, routing in React Native doesn't rely on URLs but on a navigation state object that keeps track of the current screen.`,
        tags: ['React Native', 'Navigation', 'Stack'],
      },
      {
        id: 'q4-5',
        title: 'Explain how we navigate in navigation stacks',
        answer: `In React Native (with React Navigation), a stack navigator organizes screens in a stack — like a browser history or call stack.

To go to a new screen, you use:
\`\`\`javascript
navigation.navigate("Profile");
\`\`\`
→ pushes the screen if it's not already on top.

To push a new instance of a screen:
\`\`\`javascript
navigation.push("Profile");
\`\`\`
→ always adds a new copy on top.

To go back to the previous screen:
\`\`\`javascript
navigation.goBack();
\`\`\`

To reset or replace the stack:
\`\`\`javascript
navigation.replace("Login");
\`\`\`

This mimics the way native mobile apps handle navigation — each new screen goes on top of a stack, and back navigation pops it off.`,
        tags: ['React Native', 'Navigation', 'Stack'],
      },
      {
        id: 'q4-6',
        title: 'What is the difference between navigate and push',
        answer: `● navigate("Screen")
  ○ Goes to the screen if it exists in the stack.
  ○ If the screen is already on top, it does nothing (does not create a duplicate).
  ○ Useful when you want to move around without stacking multiple copies.
● push("Screen")
  ○ Always adds a new instance of the screen on top of the stack.
  ○ Even if you're already on that screen, it creates a duplicate entry.
  ○ Useful when you need multiple copies of the same screen (e.g., viewing different user profiles).`,
        tags: ['React Native', 'Navigation', 'Stack'],
      },
      {
        id: 'q4-7',
        title: 'How do we debug a React Native app',
        answer: `● Dev Menu: open it (iOS: Cmd+D / shake; Android: Cmd+M / shake) to enable Reload, Enable Fast Refresh, Toggle Performance Monitor, etc.
● Logs & warnings: use console.log, console.warn, and LogBox (tap a warning to see stack; suppress with LogBox.ignoreLogs). View native logs with adb logcat / Xcode console.
● Flipper (recommended): inspect Network, Layout, Logs, use React DevTools, and Hermes Debugger for breakpoints and stepping through JS.
● React DevTools: inspect component tree, props/state, and profile render timings (attach via Flipper or standalone).
● Breakpoints in JS: with Hermes, set breakpoints via Flipper's Hermes debugger (or VS Code debugger with the RN extension).
● Network debugging: Flipper's Network tab captures fetch/XHR; verify headers, bodies, and timing.
● Performance profiling: enable the in-app Performance Monitor, use Flipper's Profiler, and measure long frames, memory, and JS FPS.
● Native debugging: step through iOS code in Xcode and Android in Android Studio when issues involve native modules, permissions, or crashes.
● Source maps & releases: ensure source maps are generated (for Sentry/Bugsnag) to de-minify stack traces.
● Common commands: npx react-native start (Metro), npx react-native run-ios / run-android, and adb reverse tcp:8081 tcp:8081 if the device can't reach Metro.`,
        tags: ['React Native', 'Debugging', 'Flipper'],
      },
      {
        id: 'q4-8',
        title: 'How do you optimize application performance',
        answer: `Measure first (Profiler/Flipper), then target re-renders: normalize props, use memo, useCallback, useMemo, and selectors. Virtualize long lists (FlatList/VirtualizedList/react-window). Split code and lazy-load routes/sections; use Suspense for data and streaming where available. Cache server state (React Query/RTK Query), dedupe requests, and batch updates (startTransition for non-urgent UI). Optimize images (sizes, formats), avoid heavy work on the main thread—offload to Web Workers/JSI/native. In RN, enable Hermes, adopt Fabric/TurboModules, and prefer Reanimated for smooth 60fps animations.`,
        tags: ['React Native', 'Performance', 'Optimization'],
      },
      {
        id: 'q4-9',
        title: 'What is a profiler',
        answer: `A profiler is a tool that helps analyze how your app performs by recording metrics like render times, component updates, and memory usage. In React, the React Profiler (built into React DevTools) shows which components rendered, how long they took, and why they re-rendered. In React Native, profiling can also be done with Flipper (React DevTools plugin, performance tab) or with native tools (Android Studio Profiler, Xcode Instruments) to measure CPU, memory, and FPS.`,
        tags: ['Profiler', 'Performance', 'Debugging'],
      },
      {
        id: 'q4-10',
        title: 'Explain what Expo is',
        answer: `Expo is a framework and platform for building React Native apps faster. It provides a managed workflow with prebuilt native modules, development tools, and over-the-air (OTA) updates. With Expo, you can run an app instantly using the Expo Go app, without configuring Xcode or Android Studio.

Key features:
● Managed workflow: no native code setup required (uses Expo Go).
● Bare workflow: full control with native code while still using Expo SDKs.
● Expo SDK: prebuilt APIs for camera, notifications, sensors, authentication, etc.
● OTA updates: ship updates without App Store/Play Store resubmission.
● EAS (Expo Application Services): cloud builds, updates, and submission.`,
        tags: ['Expo', 'React Native', 'Development'],
      },
      {
        id: 'q4-11',
        title: 'Explain React Native Native Modules',
        answer: `Native modules let React Native apps access platform-specific APIs (iOS/Android) directly from JavaScript. They act as a bridge between JS and native code, exposing native functionality (camera, sensors, storage, etc.) as callable JS functions.

There are two systems:
● Old architecture: modules communicate through the React Native Bridge (async, JSON-serialized messages).
● New architecture (TurboModules + JSI): direct and faster communication between JS and native without the overhead of the bridge, plus type safety with codegen.

Example use case: You write a Swift/Objective-C (iOS) or Kotlin/Java (Android) function for secure storage, expose it as a native module, then call it from JavaScript like a regular function.`,
        tags: ['Native Modules', 'React Native', 'Bridge'],
      },
      {
        id: 'q4-12',
        title: 'Can we write native modules with Expo projects',
        answer: `● Managed workflow: No, you cannot write custom native modules directly. You are limited to the native APIs included in the Expo SDK. If a native feature isn't supported, you can't add it yourself in managed mode.
● Bare workflow: Yes, you can write and integrate custom native modules (Swift/Objective-C for iOS, Kotlin/Java for Android). You still keep access to Expo SDK, but now you control the native projects and can add your own code.
● Config plugins: In managed projects, Expo provides config plugins that let you extend the native build during expo prebuild and use certain custom native packages without fully ejecting.

So:
● Managed workflow → limited to Expo's SDK.
● Bare workflow → full power, you can write native modules.`,
        tags: ['Expo', 'Native Modules', 'Workflow'],
      },
      {
        id: 'q4-13',
        title: 'Explain React Native CLI',
        answer: `React Native CLI is the official command-line interface for creating, building, and running React Native apps without Expo. It gives you full control of native projects (Xcode for iOS, Gradle for Android). Unlike Expo's managed workflow, the CLI initializes bare React Native apps where you can install and write your own native modules.

Key features:
Create a new project:
\`\`\`bash
npx react-native init MyApp
\`\`\`

Start Metro bundler:
\`\`\`bash
npx react-native start
\`\`\`

Run on simulator/emulator:
\`\`\`bash
npx react-native run-ios
npx react-native run-android
\`\`\`

Debug, link native dependencies, configure Android/iOS builds manually.
Gives flexibility to adopt the New Architecture (Fabric, Hermes, TurboModules) more easily than Expo managed.`,
        tags: ['React Native CLI', 'Development', 'Build'],
      },
      {
        id: 'q4-14',
        title: 'Explain app signing for iOS and Android',
        answer: `iOS app signing:
● Every iOS app must be signed with a certificate issued by Apple.
● Developers also need a provisioning profile, which links the app ID, devices, and certificate.
● There are two main signing modes:
  ○ Development signing → allows debugging on registered devices.
  ○ Distribution signing → required for TestFlight and App Store release.
● Tools: Xcode manages signing automatically, or you can handle certificates/profiles manually through the Apple Developer Portal.

Android app signing:
● Android apps are signed with a keystore (a file containing private keys).
● Each app has a key alias and password.
● During development, Android uses a debug keystore automatically.
● For production, you must generate a release keystore, sign the APK/AAB, and then upload it to the Play Store.
● Once an app is published, the signing key must stay consistent to allow updates. Play Store also supports App Signing by Google Play, where Google manages the key securely.`,
        tags: ['App Signing', 'iOS', 'Android'],
      },
      {
        id: 'q4-15',
        title: 'What is a provisioning profile',
        answer: `A provisioning profile is a file used in iOS development that tells Apple devices how and by whom an app is allowed to be run. It links:
● The App ID (unique identifier of your app).
● The Apple Developer certificate (who signed the app).
● A list of allowed devices (for development and testing).
● The entitlements (permissions/features like push notifications, iCloud).

Provisioning profiles are required for both development (testing on devices) and distribution (TestFlight, App Store). They ensure that only trusted apps signed with the right credentials can be installed on iOS devices.`,
        tags: ['Provisioning Profile', 'iOS', 'App Signing'],
      },
    ],
  },
  {
    id: 'state-management',
    name: 'State Management',
    description: 'Local state, Zustand, Redux Toolkit',
    color: 'from-green-500 to-green-600',
    questions: [
      {
        id: 'q5-1',
        title: 'Explain state management',
        answer: `State management is the way we handle and share data across a React application. For local UI state, we use hooks like useState and useReducer. For derived or computed state, we use useMemo. When multiple components need the same data, we use Context or external libraries like Redux, Zustand, or Jotai. For server state, tools like React Query or SWR manage fetching, caching, and synchronization.`,
        tags: ['State Management', 'Architecture', 'React'],
      },
      {
        id: 'q5-2',
        title: 'How do you debug Zustand state',
        answer: `Zustand offers built-in support for debugging and several techniques:

Zustand Devtools middleware:
Install the Redux DevTools extension in your browser, then wrap your store with the devtools middleware:
\`\`\`javascript
import create from 'zustand';
import { devtools } from 'zustand/middleware';
const useStore = create(
  devtools(set => ({
    count: 0,
    increase: () => set(state => ({ count: state.count + 1 })),
  }))
);
\`\`\`
→ You can now inspect actions and state changes in Redux DevTools.

Console logging inside actions:
Add logs in actions to trace updates:
\`\`\`javascript
increase: () =>
  set(state => {
    console.log("count before:", state.count);
    return { count: state.count + 1 };
  }),
\`\`\`

Custom selectors:
Use selectors to subscribe to specific parts of the state and log rerenders:
\`\`\`javascript
const count = useStore(state => state.count);
useEffect(() => console.log("count changed:", count), [count]);
\`\`\`

Persistence middleware:
With persist, you can persist state to storage and inspect it between reloads.`,
        tags: ['Zustand', 'State Management', 'Debugging'],
      },
      {
        id: 'q5-3',
        title: 'Does Zustand have actions and reducers similar to Redux',
        answer: `Zustand doesn't enforce the actions/reducers pattern like Redux does. Instead:
● State and actions live together in the same store.
● Actions are just functions that update the state with the set function.
● You can still implement a reducer-style store if you prefer, using set with a reducer function.

Example (typical Zustand style):
\`\`\`javascript
import create from 'zustand';
const useStore = create(set => ({
  count: 0,
  increase: () => set(state => ({ count: state.count + 1 })),
  decrease: () => set(state => ({ count: state.count - 1 })),
}));
\`\`\`

Example (Redux-like with reducer):
\`\`\`javascript
import create from 'zustand';
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
};
const useStore = create(set => ({
  count: 0,
  dispatch: action => set(state => reducer(state, action)),
}));
\`\`\`

So: Zustand supports both simple actions and reducer-style logic, but keeps things more flexible and lightweight than Redux.`,
        tags: ['Zustand', 'Redux', 'State Management'],
      },
      {
        id: 'q5-4',
        title: 'Explain Redux Toolkit',
        answer: `Redux Toolkit (RTK) is the official, recommended way to write Redux logic. It simplifies Redux by reducing boilerplate and providing opinionated utilities for common patterns like reducers, actions, and async logic.

Key features:
● configureStore: sets up the Redux store with good defaults (DevTools, middleware, immutability checks).
● createSlice: generates reducers and actions together in one place.
● createAsyncThunk: simplifies async requests and dispatching loading/success/error states.
● Immer integration: lets you write "mutating" logic in reducers while keeping immutability under the hood.
● Built-in middleware: for handling async code, dev logging, and immutability.

Example:
\`\`\`javascript
import { configureStore, createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async action
export const fetchUser = createAsyncThunk('user/fetch', async id => {
  const res = await fetch(\`/api/user/\${id}\`);
  return res.json();
});

const userSlice = createSlice({
  name: 'user',
  initialState: { data: null, loading: false },
  reducers: {
    clearUser: state => {
      state.data = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchUser.pending, state => {
        state.loading = true;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchUser.rejected, state => {
        state.loading = false;
      });
  },
});

export const { clearUser } = userSlice.actions;
export const store = configureStore({
  reducer: { user: userSlice.reducer },
});
\`\`\``,
        tags: ['Redux Toolkit', 'State Management', 'RTK'],
      },
      {
        id: 'q5-5',
        title: 'Explain slices in modern Redux Toolkit',
        answer: `In Redux Toolkit, a slice is a collection of logic for a specific feature of your app. Each slice bundles together:
● Name: the slice's namespace (used to prefix actions).
● Initial state: the default state for that feature.
● Reducers: functions that define how state changes in response to actions.
● Actions: auto-generated from the reducers.

This reduces boilerplate compared to classic Redux where actions, constants, and reducers had to be defined separately.

Example:
\`\`\`javascript
import { createSlice, configureStore } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: state => { state.value += 1; },
    decrement: state => { state.value -= 1; },
    incrementByAmount: (state, action) => { state.value += action.payload; },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export const store = configureStore({
  reducer: { counter: counterSlice.reducer },
});
\`\`\`

Here counterSlice generates both the reducer and the action creators (increment, decrement, etc.).`,
        tags: ['Redux Toolkit', 'Slice', 'State Management'],
      },
    ],
  },
  {
    id: 'build-deployment',
    name: 'Build & Deployment',
    description: 'Project setup, CI/CD, best practices',
    color: 'from-orange-500 to-orange-600',
    questions: [
      {
        id: 'q6-1',
        title: 'How do you set up a project for success',
        answer: `● Define architecture early: feature-based folders, clear boundaries (UI, hooks, services, state, tests).
● TypeScript & strict mode: enable strict, path aliases, incremental builds.
● Quality gates: ESLint + Prettier + Stylelint; Husky pre-commit (lint-staged), commitlint + conventional commits.
● State strategy: local (useState/useReducer) vs server state (React Query/RTK Query); avoid premature global stores.
● API layer: one place for fetching, auth, interceptors, and error normalization; typed DTOs & mappers.
● Testing: unit (Vitest/Jest), component (Testing Library), E2E (Playwright/Detox for RN), coverage thresholds.
● UI system: design tokens, reusable components, Storybook; accessibility checks.
● Performance budgets: bundle/analyze (webpack-bundle-analyzer), lazy loading, image strategy; RN: enable Hermes, use Fabric/TurboModules.
● Env & config: .env per environment, secret management, feature flags.
● Observability: logging, metrics, Crashlytics/Sentry, source maps, error boundaries.
● CI/CD: lint/test/build on PR, preview deployments, signed releases; RN: Fastlane/EAS, schemes/flavors.
● Docs & rituals: README, ADRs, architecture diagram, PR template, code review checklist, onboarding guide.
● Release strategy: semver, changelog, automated tagging, canary/beta channels; RN: OTA updates where appropriate.`,
        tags: ['Project Setup', 'Architecture', 'Best Practices'],
      },
    ],
  },
]
