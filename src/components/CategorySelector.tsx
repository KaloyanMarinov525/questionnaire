import type { Category } from '../data/types'

interface CategorySelectorProps {
  categories: Array<Category>
  currentCategoryId: string
  onSelectCategory: (categoryId: string) => void
}

export function CategorySelector({
  categories,
  currentCategoryId,
  onSelectCategory,
}: CategorySelectorProps) {
  return (
    <div className="relative">
      <select
        value={currentCategoryId}
        onChange={(e) => onSelectCategory(e.target.value)}
        className="w-full px-4 py-3 bg-slate-700 text-white rounded-lg font-semibold border border-slate-600 hover:border-cyan-500 focus:border-cyan-500 focus:outline-none transition-colors cursor-pointer appearance-none pr-10"
      >
        {categories.map((cat) => (
          <option key={cat.id} value={cat.id}>
            {cat.name} ({cat.questions.length})
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
  )
}
