import type { Question } from '../../types'

export const native_modules_expo: Question = {
  id: 'da7bd2ef-f87b-4376-9e12-05fe7e0197e9',
  title: `Can we write native modules with Expo projects`,
  answer: `- Managed workflow: No, you cannot write custom native modules directly. You are limited to the native APIs included in the Expo SDK. If a native feature isn't supported, you can't add it yourself in managed mode.
- Bare workflow: Yes, you can write and integrate custom native modules (Swift/Objective-C for iOS, Kotlin/Java for Android). You still keep access to Expo SDK, but now you control the native projects and can add your own code.
- Config plugins: In managed projects, Expo provides config plugins that let you extend the native build during expo prebuild and use certain custom native packages without fully ejecting.

So:
- Managed workflow → limited to Expo's SDK.
- Bare workflow → full power, you can write native modules.`,
  tags: ['Expo', 'Native Modules', 'Workflow'],
}
