import type { Question } from '../../types'

export const component_lifecycle: Question = {
  id: '6b623dc3-9fae-4324-89a6-3a63ea05c7e7',
  title: `Explain lifecycle of a React component`,
  answer: `In modern React, the lifecycle is handled mostly through hooks. Functional components use useEffect to run code after render, on updates, or during cleanup. Class components follow three states: mounting (constructor, render, componentDidMount), updating (render, componentDidUpdate), and unmounting (componentWillUnmount).`,
  tags: ['Lifecycle', 'Hooks', 'useEffect'],
}
