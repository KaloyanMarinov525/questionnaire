import { Link, createFileRoute } from '@tanstack/react-router'
import { getCategoryMetadata } from '../data/questions'

export const Route = createFileRoute('/')({
  component: App,
})

const categories = getCategoryMetadata()

function App() {
  const totalQuestions = categories.reduce((sum, cat) => sum + cat.count, 0)

  return (
    <div className="min-h-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <div className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Senior React Interview Questions
          </h1>
          <p className="mt-4 text-lg text-slate-300">
            Comprehensive collection of interview questions and answers for
            React and React Native developers
          </p>
          <div className="mt-8 flex items-center justify-center gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400">
                {totalQuestions}
              </div>
              <div className="text-sm text-slate-400">Total Questions</div>
            </div>
            <div className="h-12 w-px bg-slate-700"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400">
                {categories.length}
              </div>
              <div className="text-sm text-slate-400">Categories</div>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold text-white mb-8">Categories</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <Link
                key={category.id}
                to="/categories/$categoryId"
                params={{ categoryId: category.id }}
                search={{ index: 0 }}
                className="group relative overflow-hidden rounded-lg bg-slate-800 p-6 transition-all hover:shadow-lg hover:shadow-slate-500/20"
              >
                {/* Background gradient accent */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 transition-opacity group-hover:opacity-10`}
                ></div>

                {/* Content */}
                <div className="relative z-10">
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} mb-4`}
                  >
                    <span className="text-lg font-bold text-white">
                      {category.count}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold text-white mb-2">
                    {category.name}
                  </h3>
                  <p className="text-sm text-slate-400 mb-4">
                    {category.description}
                  </p>

                  <div className="flex items-center text-sm font-medium text-cyan-400 group-hover:text-cyan-300 transition-colors">
                    Explore <span className="ml-2">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="px-4 py-12 sm:px-6 lg:px-8 border-t border-slate-700">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-slate-400 mb-6">
            Want to learn more about this collection and how to use it
            effectively?
          </p>
          <Link
            to="/about"
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-lg transition-colors"
          >
            <span>Learn More</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
