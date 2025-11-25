import { createQuestionId } from '../../types'
import type { Question } from '../../types'

export const routing: Question = {
  id: createQuestionId('dc358921-c87a-4bdf-8139-d10a11b9ddb6'),
  title: `Explain routing in React Native and how it differs from React for web`,
  answer: `In React Native, there is no built-in router. Navigation is handled with libraries such as React Navigation or React Native Navigation. These libraries manage navigation stacks, tabs, and drawers similar to native apps. Navigation works with concepts like StackNavigator, TabNavigator, and uses navigation props (navigation.navigate("Screen")).

In React for the web, routing is usually handled by React Router, which maps URLs to components. The browser's address bar and history API are central to web navigation, while in React Native navigation is managed in-app, not via URLs (although deep linking is possible).`,
  tags: ['React Native', 'Navigation', 'Routing'],
}
