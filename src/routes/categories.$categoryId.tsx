import { createFileRoute, useNavigate, useSearch } from '@tanstack/react-router'
import { useState } from 'react'
import { ProgressIndicator } from '../components/ProgressIndicator'
import { QuestionJumpSelect } from '../components/QuestionJumpSelect'
import { QuestionCard } from '../components/QuestionCard'
import { NavigationButtons } from '../components/NavigationButtons'
import { CategorySelector } from '../components/CategorySelector'
import { CategoryInfo } from '../components/CategoryInfo'
import { KeyboardHints } from '../components/KeyboardHints'
import { useKeyboardNavigation } from '../hooks/useKeyboardNavigation'
import { questions } from '../data/questions'

interface SearchParams {
  index?: number
}

export const Route = createFileRoute('/categories/$categoryId')({
  component: CategoryPage,
  validateSearch: (search: Record<string, unknown>): SearchParams => ({
    index:
      typeof search.index === 'string'
        ? parseInt(search.index, 10)
        : typeof search.index === 'number'
          ? search.index
          : 0,
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
      <div className="min-h-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white flex items-center justify-center">
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

  const currentIndex = Math.min(
    search.index ?? 0,
    category.questions.length - 1,
  )
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

  useKeyboardNavigation({
    onArrowLeft: handlePrevious,
    onArrowRight: handleNext,
    onArrowUp: () => setIsAnswerExpanded(false),
    onArrowDown: () => setIsAnswerExpanded(true),
  })

  const categorySelectorComponent = (
    <CategorySelector
      categories={questions}
      currentCategoryId={categoryId}
      onSelectCategory={handleCategoryChange}
    />
  )

  return (
    <div className="min-h-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Main Content */}
      <div className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <ProgressIndicator
            currentIndex={currentIndex}
            totalQuestions={category.questions.length}
          />

          <QuestionJumpSelect
            questions={category.questions}
            currentIndex={currentIndex}
            onSelectQuestion={(newIndex) => {
              navigate({
                to: '/categories/$categoryId',
                params: { categoryId },
                search: (prev) => ({ ...prev, index: newIndex }),
              })
              setIsAnswerExpanded(false)
            }}
          />

          <QuestionCard
            question={currentQuestion}
            isAnswerExpanded={isAnswerExpanded}
            onToggleAnswer={() => setIsAnswerExpanded(!isAnswerExpanded)}
          />

          <NavigationButtons
            onPrevious={handlePrevious}
            onNext={handleNext}
            isFirstQuestion={isFirstQuestion}
            isLastQuestion={isLastQuestion}
            categorySelector={categorySelectorComponent}
          />

          <CategoryInfo
            categoryName={category.name}
            questionCount={category.questions.length}
          />
        </div>
      </div>
      <KeyboardHints />
    </div>
  )
}
