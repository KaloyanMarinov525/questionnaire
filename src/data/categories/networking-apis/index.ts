import { server_communication } from './server-communication'
import { http_interceptor } from './http-interceptor'
import type { Category } from '../../types'

export const networkingApis: Category = {
  id: 'networking-apis',
  name: 'Networking & APIs',
  description: 'REST, WebSockets, HTTP interceptors',
  color: 'from-blue-500 to-blue-600',
  questions: [server_communication, http_interceptor],
}
