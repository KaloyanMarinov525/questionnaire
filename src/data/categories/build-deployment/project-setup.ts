import { createQuestionId } from '../../types'
import type { Question } from '../../types'

export const project_setup: Question = {
  id: createQuestionId('e466abd4-ff7c-49c8-b74e-e8671f4c64c9'),
  title: `How do you set up a project for success`,
  answer: `## Architecture & Structure

- **Define architecture early**: Feature-based folders, clear boundaries (UI, hooks, services, state, tests).
- **TypeScript & strict mode**: Enable strict, path aliases, incremental builds.

## Code Quality

- **Quality gates**: ESLint + Prettier + Stylelint; Husky pre-commit (lint-staged), commitlint + conventional commits.

## State Management

- **State strategy**: Local (useState/useReducer) vs server state (React Query/RTK Query); avoid premature global stores.
- **API layer**: One place for fetching, auth, interceptors, and error normalization; typed DTOs & mappers.

## Testing & UI

- **Testing**: Unit (Vitest/Jest), component (Testing Library), E2E (Playwright/Detox for RN), coverage thresholds.
- **UI system**: Design tokens, reusable components, Storybook; accessibility checks.

## Performance & Deployment

- **Performance budgets**: Bundle/analyze (webpack-bundle-analyzer), lazy loading, image strategy; RN: enable Hermes, use Fabric/TurboModules.
- **Env & config**: .env per environment, secret management, feature flags.
- **Observability**: Logging, metrics, Crashlytics/Sentry, source maps, error boundaries.
- **CI/CD**: Lint/test/build on PR, preview deployments, signed releases; RN: Fastlane/EAS, schemes/flavors.

## Documentation & Release

- **Docs & rituals**: README, ADRs, architecture diagram, PR template, code review checklist, onboarding guide.
- **Release strategy**: Semver, changelog, automated tagging, canary/beta channels; RN: OTA updates where appropriate.`,
  tags: ['Project Setup', 'Architecture', 'Best Practices'],
}
