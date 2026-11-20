import { createQuestionId } from '../../types'
import type { Question } from '../../types'

export const app_signing: Question = {
  id: createQuestionId('384cd145-4bc4-4f02-930f-fd67c2a054de'),
  title: `Explain app signing for iOS and Android`,
  answer: `**iOS app signing:**
- Every iOS app must be signed with a certificate issued by Apple.
- Developers also need a provisioning profile, which links the app ID, devices, and certificate.
- There are two main signing modes:
  - Development signing → allows debugging on registered devices.
  - Distribution signing → required for TestFlight and App Store release.
- Tools: Xcode manages signing automatically, or you can handle certificates/profiles manually through the Apple Developer Portal.

**Android app signing:**
- Android apps are signed with a keystore (a file containing private keys).
- Each app has a key alias and password.
- During development, Android uses a debug keystore automatically.
- For production, you must generate a release keystore, sign the APK/AAB, and then upload it to the Play Store.
- Once an app is published, the signing key must stay consistent to allow updates. Play Store also supports App Signing by Google Play, where Google manages the key securely.`,
  tags: ['App Signing', 'iOS', 'Android'],
}
