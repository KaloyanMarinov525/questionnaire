export interface Question {
  id: string
  title: string
  answer: string
  tags: Array<string>
}

export interface Category {
  id: string
  name: string
  description: string
  color: string
  questions: Array<Question>
}
