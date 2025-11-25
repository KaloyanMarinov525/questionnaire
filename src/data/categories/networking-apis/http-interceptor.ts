import type { Question } from '../../types'

export const http_interceptor: Question = {
  id: '9c328a3a-4bc3-4f50-a8d0-fb27d7419647',
  title: 'What is HTTP interceptor',
  answer: `An HTTP interceptor is a middleware layer for requests and responses. It allows you to automatically attach headers (like authentication tokens), log traffic, handle errors globally, or modify responses before they reach the application. In React, this is often implemented with Axios interceptors or fetch wrappers.`,
  tags: ['HTTP', 'Interceptor', 'Middleware'],
}
