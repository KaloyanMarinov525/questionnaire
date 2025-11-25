interface ProgressIndicatorProps {
  currentIndex: number
  totalQuestions: number
}

export function ProgressIndicator({
  currentIndex,
  totalQuestions,
}: ProgressIndicatorProps) {
  const percentage = Math.round(((currentIndex + 1) / totalQuestions) * 100)

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm font-medium text-slate-400">
          Question {currentIndex + 1} of {totalQuestions}
        </span>
        <span className="text-sm font-medium text-cyan-400">{percentage}%</span>
      </div>
      <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-300"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  )
}
