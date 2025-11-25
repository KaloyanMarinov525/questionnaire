import { createQuestionId } from '../../types'
import type { Question } from '../../types'

export const api_requests: Question = {
  id: createQuestionId('47a3a252-734a-4276-adce-a5c823597224'),
  title: `How do we make API requests in React`,
  answer: `API requests are usually made with fetch or libraries like Axios. The common pattern is to call the API inside useEffect, store the data in state with useState, and handle loading/error states. For advanced use, libraries like React Query or SWR manage caching, retries, and background updates.`,
  tags: ['API', 'fetch', 'useEffect'],
}
