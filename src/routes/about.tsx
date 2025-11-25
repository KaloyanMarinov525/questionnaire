import { Link, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: AboutPage,
})

function AboutPage() {
  return (
    <div className="min-h-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Main Content */}
      <div className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              About This Collection
            </h1>
            <p className="text-lg text-slate-300">
              A comprehensive resource for React and React Native interview
              preparation
            </p>
          </div>

          {/* Purpose Section */}
          <div className="mb-12">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="text-cyan-400">👤</span> For Interviewees
                </h2>
                <p className="text-slate-300 leading-relaxed">
                  Prepare for senior-level React and React Native interviews
                  with comprehensive questions covering core concepts, advanced
                  patterns, and best practices. This collection includes
                  real-world scenarios and in-depth explanations to help you ace
                  technical interviews.
                </p>
              </div>

              <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="text-cyan-400">👥</span> For Interviewers
                </h2>
                <p className="text-slate-300 leading-relaxed">
                  Use these curated questions to assess technical knowledge and
                  communication skills during the interview process. Each
                  question includes detailed answers to help standardize
                  interviews and identify truly competent developers.
                </p>
              </div>
            </div>
          </div>

          {/* Content Overview */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">
              What's Covered
            </h2>
            <div className="grid gap-4">
              <div className="bg-slate-800 rounded-lg p-6 border border-slate-700 hover:border-cyan-500/50 transition-colors">
                <h3 className="text-lg font-semibold text-cyan-400 mb-2">
                  Networking & APIs
                </h3>
                <p className="text-slate-300">
                  REST, WebSockets, HTTP interceptors, and server communication
                  patterns
                </p>
              </div>

              <div className="bg-slate-800 rounded-lg p-6 border border-slate-700 hover:border-cyan-500/50 transition-colors">
                <h3 className="text-lg font-semibold text-yellow-400 mb-2">
                  JavaScript/TypeScript Fundamentals
                </h3>
                <p className="text-slate-300">
                  Event loop, promises, async/await, types, design patterns, and
                  core language concepts
                </p>
              </div>

              <div className="bg-slate-800 rounded-lg p-6 border border-slate-700 hover:border-cyan-500/50 transition-colors">
                <h3 className="text-lg font-semibold text-cyan-400 mb-2">
                  React Core Concepts
                </h3>
                <p className="text-slate-300">
                  Components, hooks, lifecycle, reconciliation, performance
                  optimization, and state management patterns
                </p>
              </div>

              <div className="bg-slate-800 rounded-lg p-6 border border-slate-700 hover:border-cyan-500/50 transition-colors">
                <h3 className="text-lg font-semibold text-purple-400 mb-2">
                  React Native
                </h3>
                <p className="text-slate-300">
                  Mobile development, navigation, debugging, Expo, native
                  modules, and app signing
                </p>
              </div>

              <div className="bg-slate-800 rounded-lg p-6 border border-slate-700 hover:border-cyan-500/50 transition-colors">
                <h3 className="text-lg font-semibold text-green-400 mb-2">
                  State Management
                </h3>
                <p className="text-slate-300">
                  Local state, Context, Redux Toolkit, Zustand, and server state
                  management
                </p>
              </div>

              <div className="bg-slate-800 rounded-lg p-6 border border-slate-700 hover:border-cyan-500/50 transition-colors">
                <h3 className="text-lg font-semibold text-orange-400 mb-2">
                  Build & Deployment
                </h3>
                <p className="text-slate-300">
                  Project setup, CI/CD, best practices, and production
                  deployment strategies
                </p>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">
              By The Numbers
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="bg-gradient-to-br from-cyan-900 to-cyan-800 rounded-lg p-6 border border-cyan-700">
                <div className="text-4xl font-bold text-cyan-400 mb-2">77</div>
                <p className="text-slate-300">Total Questions</p>
              </div>

              <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-lg p-6 border border-blue-700">
                <div className="text-4xl font-bold text-blue-400 mb-2">6</div>
                <p className="text-slate-300">Topics Covered</p>
              </div>

              <div className="bg-gradient-to-br from-purple-900 to-purple-800 rounded-lg p-6 border border-purple-700">
                <div className="text-4xl font-bold text-purple-400 mb-2">
                  100%
                </div>
                <p className="text-slate-300">Free & Open</p>
              </div>
            </div>
          </div>

          {/* How to Use */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">How to Use</h2>
            <div className="space-y-4">
              <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-cyan-600 text-white font-semibold">
                      1
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Browse Categories
                    </h3>
                    <p className="text-slate-300">
                      Go back to home and select a category that interests you
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-cyan-600 text-white font-semibold">
                      2
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Read Questions
                    </h3>
                    <p className="text-slate-300">
                      Click on any question to view it. Answers are hidden by
                      default - click "Show Answer" to reveal the full
                      explanation
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-cyan-600 text-white font-semibold">
                      3
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Navigate & Learn
                    </h3>
                    <p className="text-slate-300">
                      Use Previous/Next buttons to move through questions, or
                      use the dropdown to jump to a different category
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-cyan-600 text-white font-semibold">
                      4
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Bookmark Questions
                    </h3>
                    <p className="text-slate-300">
                      Each URL is unique - bookmark specific questions to return
                      to them later for review
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tips Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">
              Tips for Success
            </h2>
            <ul className="space-y-3 text-slate-300">
              <li className="flex gap-3">
                <span className="text-cyan-400 font-bold">→</span>
                <span>
                  Try to answer each question before looking at the explanation
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-400 font-bold">→</span>
                <span>Take notes on topics you find challenging</span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-400 font-bold">→</span>
                <span>
                  Practice explaining answers out loud - this improves
                  communication
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-400 font-bold">→</span>
                <span>
                  Focus on understanding the "why" not just the "what"
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-400 font-bold">→</span>
                <span>
                  Review questions you've already learned - refresh your
                  knowledge regularly
                </span>
              </li>
            </ul>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-cyan-900 to-blue-900 rounded-lg p-8 border border-cyan-700 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-slate-300 mb-6">
              Head back to the home page and select a category to begin your
              interview preparation journey
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-lg transition-colors"
            >
              <span>Explore Categories</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
