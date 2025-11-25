import { createQuestionId } from '../../types'
import type { Question } from '../../types'

export const native_modules: Question = {
  id: createQuestionId('65e36e38-9f6d-4d22-a3a1-76f114e89c73'),
  title: `Explain React Native Native Modules`,
  answer: `Native modules let React Native apps access platform-specific APIs (iOS/Android) directly from JavaScript. They act as a bridge between JS and native code, exposing native functionality (camera, sensors, storage, etc.) as callable JS functions.

There are two systems:
- Old architecture: modules communicate through the React Native Bridge (async, JSON-serialized messages).
- New architecture (TurboModules + JSI): direct and faster communication between JS and native without the overhead of the bridge, plus type safety with codegen.

Example use case: You write a Swift/Objective-C (iOS) or Kotlin/Java (Android) function for secure storage, expose it as a native module, then call it from JavaScript like a regular function.`,
  tags: ['Native Modules', 'React Native', 'Bridge'],
}
