import { useEffect, useState } from 'react'
import { X } from 'lucide-react'

export function KeyboardHints() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === '?') {
        e.preventDefault()
        setIsVisible((prev) => !prev)
      }
      if (e.key === 'Escape') {
        setIsVisible(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <div
      className={`fixed bottom-4 right-4 bg-slate-800 border border-slate-700 rounded-lg p-4 text-sm text-slate-300 max-w-xs transition-opacity duration-200 ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="flex items-center justify-between mb-2">
        <p className="font-semibold text-slate-200">⌨️ Keyboard Shortcuts</p>
        <button
          onClick={() => setIsVisible(false)}
          className="text-slate-400 hover:text-slate-200 transition-colors"
          aria-label="Close keyboard hints"
        >
          <X size={16} />
        </button>
      </div>
      <ul className="space-y-1 text-xs mb-3">
        <li>
          <span className="font-mono bg-slate-700 px-2 py-1 rounded mr-2">
            ←
          </span>
          Previous question
        </li>
        <li>
          <span className="font-mono bg-slate-700 px-2 py-1 rounded mr-2">
            →
          </span>
          Next question
        </li>
        <li>
          <span className="font-mono bg-slate-700 px-2 py-1 rounded mr-2">
            ↑
          </span>
          Hide answer
        </li>
        <li>
          <span className="font-mono bg-slate-700 px-2 py-1 rounded mr-2">
            ↓
          </span>
          Show answer
        </li>
      </ul>
      <p className="text-xs text-slate-500 border-t border-slate-700 pt-2 mt-2">
        Press
        <span className="font-mono bg-slate-700 px-1.5 py-0.5 rounded mx-1">
          Ctrl + ?
        </span>
        to toggle • Press
        <span className="font-mono bg-slate-700 px-1.5 py-0.5 rounded mx-1">
          Esc
        </span>
        to close
      </p>
    </div>
  )
}
