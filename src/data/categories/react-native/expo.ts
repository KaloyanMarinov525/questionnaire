import { createQuestionId } from '../../types'
import type { Question } from '../../types'

export const expo: Question = {
  id: createQuestionId('03e37d1c-024f-4808-84a5-6caa29e14fcf'),
  title: `Explain what Expo is`,
  answer: `Expo is a framework and platform for building React Native apps faster. It provides a managed workflow with prebuilt native modules, development tools, and over-the-air (OTA) updates. With Expo, you can run an app instantly using the Expo Go app, without configuring Xcode or Android Studio.

Key features:
- Managed workflow: no native code setup required (uses Expo Go).
- Bare workflow: full control with native code while still using Expo SDKs.
- Expo SDK: prebuilt APIs for camera, notifications, sensors, authentication, etc.
- OTA updates: ship updates without App Store/Play Store resubmission.
- EAS (Expo Application Services): cloud builds, updates, and submission.`,
  tags: ['Expo', 'React Native', 'Development'],
}
