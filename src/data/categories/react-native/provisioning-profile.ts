import { createQuestionId } from '../../types'
import type { Question } from '../../types'

export const provisioning_profile: Question = {
  id: createQuestionId('6826990f-9534-4b42-9576-ad4decc3c065'),
  title: `What is a provisioning profile`,
  answer: `A provisioning profile is a file used in iOS development that tells Apple devices how and by whom an app is allowed to be run. It links:
- The App ID (unique identifier of your app).
- The Apple Developer certificate (who signed the app).
- A list of allowed devices (for development and testing).
- The entitlements (permissions/features like push notifications, iCloud).

Provisioning profiles are required for both development (testing on devices) and distribution (TestFlight, App Store). They ensure that only trusted apps signed with the right credentials can be installed on iOS devices.`,
  tags: ['Provisioning Profile', 'iOS', 'App Signing'],
}
