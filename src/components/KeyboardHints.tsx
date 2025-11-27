import { useState } from 'react'
import { HelpCircle, X } from 'lucide-react'

export function KeyboardHintsButton({ isRelevant = true }: { isRelevant?: boolean }) {
  const [isVisible, setIsVisible] = useState(false)

  if (!isRelevant) return null

  return (
    <>
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="p-2 hover:bg-gray-700 rounded-lg transition-colors cursor-pointer"
        aria-label="Show keyboard shortcuts"
        title="Keyboard shortcuts"
      >
        <HelpCircle size={20} />
      </button>

      {isVisible && (
        <div
          className="fixed inset-0 z-40 flex items-center justify-center bg-black/50"
          onClick={() => setIsVisible(false)}
        >
          <div
            className="relative bg-slate-800 border border-slate-700 rounded-lg p-8 text-sm text-slate-300 max-w-sm shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsVisible(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-200 transition-colors cursor-pointer"
              aria-label="Close keyboard hints"
            >
              <X size={20} />
            </button>
            <div className="mb-6 pr-8">
              <p className="font-semibold text-slate-200 text-lg">⌨️ Keyboard Shortcuts</p>
            </div>
            <ul className="space-y-2 text-xs">
              <li className="flex items-center">
                <span className="font-mono bg-slate-700 px-2 py-1 rounded mr-3 min-w-fit">
                  ←
                </span>
                <span>Previous question</span>
              </li>
              <li className="flex items-center">
                <span className="font-mono bg-slate-700 px-2 py-1 rounded mr-3 min-w-fit">
                  →
                </span>
                <span>Next question</span>
              </li>
              <li className="flex items-center">
                <span className="font-mono bg-slate-700 px-2 py-1 rounded mr-3 min-w-fit">
                  ↑
                </span>
                <span>Hide answer</span>
              </li>
              <li className="flex items-center">
                <span className="font-mono bg-slate-700 px-2 py-1 rounded mr-3 min-w-fit">
                  ↓
                </span>
                <span>Show answer</span>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  )
}

// For backward compatibility
export function KeyboardHints() {
  return <KeyboardHintsButton />
}
