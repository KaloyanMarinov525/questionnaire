import type { Question } from '../data/types'

interface QuestionJumpSelectProps {
  questions: Array<Question>
  currentIndex: number
  onSelectQuestion: (index: number) => void
}

export function formatQuestionTitle(title: string, maxLength: number = 40): string {
  if (title.length > maxLength) {
    return `${title.substring(0, maxLength)}...`
  }
  return title
}

export function QuestionJumpSelect({
  questions,
  currentIndex,
  onSelectQuestion,
}: QuestionJumpSelectProps) {
  return (
    <div className="mt-4 mb-8">
      <label className="text-xs font-medium text-slate-400 block mb-2">
        Jump to Question:
      </label>
      <div className="relative">
        <select
          value={currentIndex}
          onChange={(e) => onSelectQuestion(parseInt(e.target.value, 10))}
          className="w-full px-3 py-2 bg-slate-700 text-white text-sm rounded-lg border border-slate-600 hover:border-cyan-500 focus:border-cyan-500 focus:outline-none transition-colors cursor-pointer appearance-none pr-10"
        >
          {questions.map((question, idx) => (
            <option key={question.id} value={idx}>
              Q{idx + 1}: {formatQuestionTitle(question.title)}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
          <svg
            className="h-4 w-4 text-slate-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </div>
  )
}
