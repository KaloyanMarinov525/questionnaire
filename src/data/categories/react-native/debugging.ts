import type { Question } from '../../types'

export const debugging: Question = {
  id: '0fa95d2d-0aaa-45cb-963d-e7f94f580139',
  title: `How do we debug a React Native app`,
  answer: `● Dev Menu: open it (iOS: Cmd+D / shake; Android: Cmd+M / shake) to enable Reload, Enable Fast Refresh, Toggle Performance Monitor, etc.
● Logs & warnings: use console.log, console.warn, and LogBox (tap a warning to see stack; suppress with LogBox.ignoreLogs). View native logs with adb logcat / Xcode console.
● Flipper (recommended): inspect Network, Layout, Logs, use React DevTools, and Hermes Debugger for breakpoints and stepping through JS.
● React DevTools: inspect component tree, props/state, and profile render timings (attach via Flipper or standalone).
● Breakpoints in JS: with Hermes, set breakpoints via Flipper's Hermes debugger (or VS Code debugger with the RN extension).
● Network debugging: Flipper's Network tab captures fetch/XHR; verify headers, bodies, and timing.
● Performance profiling: enable the in-app Performance Monitor, use Flipper's Profiler, and measure long frames, memory, and JS FPS.
● Native debugging: step through iOS code in Xcode and Android in Android Studio when issues involve native modules, permissions, or crashes.
● Source maps & releases: ensure source maps are generated (for Sentry/Bugsnag) to de-minify stack traces.
● Common commands: npx react-native start (Metro), npx react-native run-ios / run-android, and adb reverse tcp:8081 tcp:8081 if the device can't reach Metro.`,
  tags: ['React Native', 'Debugging', 'Flipper'],
}
