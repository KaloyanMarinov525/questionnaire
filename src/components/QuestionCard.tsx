import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import type { Question } from '../data/types'

interface QuestionCardProps {
  question: Question
  isAnswerExpanded: boolean
  onToggleAnswer: () => void
}

export function QuestionCard({
  question,
  isAnswerExpanded,
  onToggleAnswer,
}: QuestionCardProps) {
  return (
    <div className="bg-slate-800 rounded-lg p-8 mb-8 border border-slate-700">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white">
        {question.title}
      </h2>

      {/* Tags */}
      {question.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-6">
          {question.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-slate-700 text-slate-300 text-xs font-medium rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Answer Toggle and Content */}
      <div className="mt-6 pt-6 border-t border-slate-700">
        <button
          onClick={onToggleAnswer}
          className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold mb-4 transition-colors cursor-pointer"
        >
          {isAnswerExpanded ? '▼' : '▶'}{' '}
          {isAnswerExpanded ? 'Hide' : 'Show'} Answer
        </button>

        {isAnswerExpanded && (
          <div className="prose prose-invert max-w-none text-slate-300 leading-relaxed markdown-content">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeHighlight]}
            >
              {question.answer}
            </ReactMarkdown>
          </div>
        )}
      </div>
    </div>
  )
}
