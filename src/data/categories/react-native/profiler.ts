import { createQuestionId } from '../../types'
import type { Question } from '../../types'

export const profiler: Question = {
  id: createQuestionId('73724d3d-6708-4b31-bba7-a8841f837792'),
  title: `What is a profiler`,
  answer: `A profiler is a tool that helps analyze how your app performs by recording metrics like render times, component updates, and memory usage. In React, the React Profiler (built into React DevTools) shows which components rendered, how long they took, and why they re-rendered. In React Native, profiling can also be done with Flipper (React DevTools plugin, performance tab) or with native tools (Android Studio Profiler, Xcode Instruments) to measure CPU, memory, and FPS.`,
  tags: ['Profiler', 'Performance', 'Debugging'],
}
