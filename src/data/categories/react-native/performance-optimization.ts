import type { Question } from '../../types'

export const performance_optimization: Question = {
  id: 'e45c843c-6f37-409f-9ab9-953f94615769',
  title: `How do you optimize application performance`,
  answer: `Measure first (Profiler/Flipper), then target re-renders: normalize props, use memo, useCallback, useMemo, and selectors. Virtualize long lists (FlatList/VirtualizedList/react-window). Split code and lazy-load routes/sections; use Suspense for data and streaming where available. Cache server state (React Query/RTK Query), dedupe requests, and batch updates (startTransition for non-urgent UI). Optimize images (sizes, formats), avoid heavy work on the main thread—offload to Web Workers/JSI/native. In RN, enable Hermes, adopt Fabric/TurboModules, and prefer Reanimated for smooth 60fps animations.`,
  tags: ['React Native', 'Performance', 'Optimization'],
}
