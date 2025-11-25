export function KeyboardHints() {
  return (
    <div className="hidden 2xl:block fixed bottom-4 right-4 bg-slate-800 border border-slate-700 rounded-lg p-4 text-sm text-slate-300 max-w-xs">
      <p className="font-semibold text-slate-200 mb-2">⌨️ Keyboard Shortcuts</p>
      <ul className="space-y-1 text-xs">
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
    </div>
  )
}
