import { createQuestionId } from '../../types'
import type { Question } from '../../types'

export const routing_concept: Question = {
  id: createQuestionId('2d35bed9-03f2-4bc4-adac-aecfa07c8264'),
  title: `What concept does routing in React Native use`,
  answer: `Routing in React Native is based on the concept of navigation stacks, tabs, and drawers, similar to native mobile apps. Libraries like React Navigation implement:
- Stack navigation → screens are pushed and popped like a call stack.
- Tab navigation → switching between screens with a bottom or top tab bar.
- Drawer navigation → side menu that slides in/out.

Unlike React for web, routing in React Native doesn't rely on URLs but on a navigation state object that keeps track of the current screen.`,
  tags: ['React Native', 'Navigation', 'Stack'],
}
