interface CategoryInfoProps {
  categoryName: string
  questionCount: number
}

export function CategoryInfo({
  categoryName,
  questionCount,
}: CategoryInfoProps) {
  return (
    <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
      <p className="text-slate-300">
        Viewing{' '}
        <span className="font-semibold text-cyan-400">{categoryName}</span> •{' '}
        <span className="font-semibold">{questionCount}</span> questions
      </p>
    </div>
  )
}
