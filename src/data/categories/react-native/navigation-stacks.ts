import { createQuestionId } from '../../types'
import type { Question } from '../../types'

export const navigation_stacks: Question = {
  id: createQuestionId('1b692107-e6fc-4d0b-8c21-1b36f87e4e77'),
  title: `Explain how we navigate in navigation stacks`,
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
}
