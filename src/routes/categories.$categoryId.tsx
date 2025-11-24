import { createFileRoute, useNavigate, useSearch } from '@tanstack/react-router'
import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { questions } from '../data/questions'

interface SearchParams {
  index?: number
}

export const Route = createFileRoute('/categories/$categoryId')({
  component: CategoryPage,
  validateSearch: (search: Record<string, unknown>): SearchParams => ({
    index: typeof search.index === 'string' ? parseInt(search.index, 10) : (typeof search.index === 'number' ? search.index : 0),
  }),
})

function CategoryPage() {
  const { categoryId } = Route.useParams()
  const navigate = useNavigate()
  const searchParams = useSearch({ from: Route.fullPath })
  const [isAnswerExpanded, setIsAnswerExpanded] = useState(false)

  const search = searchParams as SearchParams

  const category = questions.find((cat) => cat.id === categoryId)
  if (!category) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Category not found</h1>
          <button
            onClick={() => navigate({ to: '/' })}
            className="px-6 py-2 bg-cyan-500 hover:bg-cyan-600 rounded-lg font-semibold transition-colors"
          >
            Back to Home
          </button>
        </div>
      </div>
    )
  }

  const currentIndex = Math.min(search.index ?? 0, category.questions.length - 1)
  const currentQuestion = category.questions[currentIndex]
  const isFirstQuestion = currentIndex === 0
  const isLastQuestion = currentIndex === category.questions.length - 1

  const handlePrevious = () => {
    if (!isFirstQuestion) {
      navigate({
        to: '/categories/$categoryId',
        params: { categoryId },
        search: (prev) => ({ ...prev, index: currentIndex - 1 }),
      })
      setIsAnswerExpanded(false)
    }
  }

  const handleNext = () => {
    if (!isLastQuestion) {
      navigate({
        to: '/categories/$categoryId',
        params: { categoryId },
        search: (prev) => ({ ...prev, index: currentIndex + 1 }),
      })
      setIsAnswerExpanded(false)
    }
  }

  const handleCategoryChange = (newCategoryId: string) => {
    navigate({
      to: '/categories/$categoryId',
      params: { categoryId: newCategoryId },
      search: { index: 0 },
    })
    setIsAnswerExpanded(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Main Content */}
      <div className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          {/* Progress Indicator */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium text-slate-400">
                Question {currentIndex + 1} of {category.questions.length}
              </span>
              <span className="text-sm font-medium text-cyan-400">
                {Math.round(((currentIndex + 1) / category.questions.length) * 100)}%
              </span>
            </div>
            <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-300"
                style={{
                  width: `${((currentIndex + 1) / category.questions.length) * 100}%`,
                }}
              ></div>
            </div>

            {/* Quick Jump to Question */}
            <div className="mt-4">
              <label className="text-xs font-medium text-slate-400 block mb-2">
                Jump to Question:
              </label>
              <select
                value={currentIndex}
                onChange={(e) => {
                  const newIndex = parseInt(e.target.value, 10)
                  navigate({
                    to: '/categories/$categoryId',
                    params: { categoryId },
                    search: (prev) => ({ ...prev, index: newIndex }),
                  })
                  setIsAnswerExpanded(false)
                }}
                className="w-full px-3 py-2 bg-slate-700 text-white text-sm rounded-lg border border-slate-600 hover:border-cyan-500 focus:border-cyan-500 focus:outline-none transition-colors cursor-pointer"
              >
                {category.questions.map((question, idx) => (
                  <option key={question.id} value={idx}>
                    Q{idx + 1}: {question.title.substring(0, 40)}
                    {question.title.length > 40 ? '...' : ''}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Question Card */}
          <div className="bg-slate-800 rounded-lg p-8 mb-8 border border-slate-700">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white">
              {currentQuestion.title}
            </h2>

            {/* Tags */}
            {currentQuestion.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {currentQuestion.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-slate-700 text-slate-300 text-xs font-medium rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Answer */}
            <div className="mt-6 pt-6 border-t border-slate-700">
              <button
                onClick={() => setIsAnswerExpanded(!isAnswerExpanded)}
                className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold mb-4 transition-colors cursor-pointer"
              >
                {isAnswerExpanded ? '▼' : '▶'} {isAnswerExpanded ? 'Hide' : 'Show'} Answer
              </button>

              {isAnswerExpanded && (
                <div className="prose prose-invert max-w-none text-slate-300 whitespace-pre-wrap leading-relaxed">
                  {currentQuestion.answer}
                </div>
              )}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <button
              onClick={handlePrevious}
              disabled={isFirstQuestion}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-slate-700 hover:bg-slate-600 disabled:bg-slate-800 disabled:text-slate-500 disabled:cursor-not-allowed cursor-pointer rounded-lg font-semibold transition-colors"
            >
              <ChevronLeft size={20} />
              <span>Previous</span>
            </button>

            <div className="flex-1 flex items-center justify-center">
              <select
                value={categoryId}
                onChange={(e) => handleCategoryChange(e.target.value)}
                className="px-4 py-3 bg-slate-700 text-white rounded-lg font-semibold border border-slate-600 hover:border-cyan-500 focus:border-cyan-500 focus:outline-none transition-colors cursor-pointer"
              >
                {questions.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.name} ({cat.questions.length})
                  </option>
                ))}
              </select>
            </div>

            <button
              onClick={handleNext}
              disabled={isLastQuestion}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-cyan-600 hover:bg-cyan-700 disabled:bg-slate-800 disabled:text-slate-500 disabled:cursor-not-allowed cursor-pointer rounded-lg font-semibold transition-colors"
            >
              <span>Next</span>
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Category Info */}
          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
            <p className="text-slate-300">
              Viewing <span className="font-semibold text-cyan-400">{category.name}</span> •{' '}
              <span className="font-semibold">{category.questions.length}</span> questions
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
