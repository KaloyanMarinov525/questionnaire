import type { Question } from '../../types'

export const project_setup: Question = {
  id: 'e466abd4-ff7c-49c8-b74e-e8671f4c64c9',
  title: `How do you set up a project for success`,
  answer: `● Define architecture early: feature-based folders, clear boundaries (UI, hooks, services, state, tests).
● TypeScript & strict mode: enable strict, path aliases, incremental builds.
● Quality gates: ESLint + Prettier + Stylelint; Husky pre-commit (lint-staged), commitlint + conventional commits.
● State strategy: local (useState/useReducer) vs server state (React Query/RTK Query); avoid premature global stores.
● API layer: one place for fetching, auth, interceptors, and error normalization; typed DTOs & mappers.
● Testing: unit (Vitest/Jest), component (Testing Library), E2E (Playwright/Detox for RN), coverage thresholds.
● UI system: design tokens, reusable components, Storybook; accessibility checks.
● Performance budgets: bundle/analyze (webpack-bundle-analyzer), lazy loading, image strategy; RN: enable Hermes, use Fabric/TurboModules.
● Env & config: .env per environment, secret management, feature flags.
● Observability: logging, metrics, Crashlytics/Sentry, source maps, error boundaries.
● CI/CD: lint/test/build on PR, preview deployments, signed releases; RN: Fastlane/EAS, schemes/flavors.
● Docs & rituals: README, ADRs, architecture diagram, PR template, code review checklist, onboarding guide.
● Release strategy: semver, changelog, automated tagging, canary/beta channels; RN: OTA updates where appropriate.`,
  tags: ['Project Setup', 'Architecture', 'Best Practices'],
}
