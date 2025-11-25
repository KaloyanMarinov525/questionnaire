import type { Question } from '../../types'

export const react_native_cli: Question = {
  id: '85c1894a-5e4e-476f-add4-65ff90e9608c',
  title: `Explain React Native CLI`,
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
}
