import { ChevronLeft, ChevronRight } from 'lucide-react'

interface NavigationButtonsProps {
  onPrevious: () => void
  onNext: () => void
  isFirstQuestion: boolean
  isLastQuestion: boolean
  categorySelector: React.ReactNode
}

export function NavigationButtons({
  onPrevious,
  onNext,
  isFirstQuestion,
  isLastQuestion,
  categorySelector,
}: NavigationButtonsProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-8">
      <button
        onClick={onPrevious}
        disabled={isFirstQuestion}
        className="flex items-center justify-center gap-2 px-6 py-3 bg-slate-700 hover:bg-slate-600 disabled:bg-slate-800 disabled:text-slate-500 disabled:cursor-not-allowed cursor-pointer rounded-lg font-semibold transition-colors"
      >
        <ChevronLeft size={20} />
        <span>Previous</span>
      </button>

      <div className="flex-1">{categorySelector}</div>

      <button
        onClick={onNext}
        disabled={isLastQuestion}
        className="flex items-center justify-center gap-2 px-6 py-3 bg-cyan-600 hover:bg-cyan-700 disabled:bg-slate-800 disabled:text-slate-500 disabled:cursor-not-allowed cursor-pointer rounded-lg font-semibold transition-colors"
      >
        <span>Next</span>
        <ChevronRight size={20} />
      </button>
    </div>
  )
}
