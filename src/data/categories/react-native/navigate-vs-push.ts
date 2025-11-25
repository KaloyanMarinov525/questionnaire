import type { Question } from '../../types'

export const navigate_vs_push: Question = {
  id: '894b5584-e6c9-47b1-a53d-3ebe54015db5',
  title: `What is the difference between navigate and push`,
  answer: `● navigate("Screen")
  ○ Goes to the screen if it exists in the stack.
  ○ If the screen is already on top, it does nothing (does not create a duplicate).
  ○ Useful when you want to move around without stacking multiple copies.
● push("Screen")
  ○ Always adds a new instance of the screen on top of the stack.
  ○ Even if you're already on that screen, it creates a duplicate entry.
  ○ Useful when you need multiple copies of the same screen (e.g., viewing different user profiles).`,
  tags: ['React Native', 'Navigation', 'Stack'],
}
