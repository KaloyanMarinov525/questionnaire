import { createFileRoute, useNavigate } from '@tanstack/react-router'

export const Route = createFileRoute('/__error')({
  component: ErrorComponent,
})

function ErrorComponent() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white flex items-center justify-center">
      <div className="text-center px-4">
        <h1 className="text-5xl font-bold mb-4">Error</h1>
        <h2 className="text-2xl font-semibold mb-4 text-slate-300">
          Something went wrong
        </h2>
        <p className="text-slate-400 mb-8 max-w-md mx-auto">
          An unexpected error occurred. Please try again or return to the home
          page.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => navigate({ to: '/' })}
            className="px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-lg transition-colors"
          >
            Back to Home
          </button>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-lg transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    </div>
  )
}
