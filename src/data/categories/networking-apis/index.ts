import { createCategoryId } from '../../types'
import { http_interceptor } from './http-interceptor'
import { server_communication } from './server-communication'
import type { Category } from '../../types'

export const networkingApis: Category = {
  id: createCategoryId('networking-apis'),
  name: 'Networking & APIs',
  description: 'REST, WebSockets, HTTP interceptors',
  color: 'from-blue-500 to-blue-600',
  questions: [server_communication, http_interceptor],
}
