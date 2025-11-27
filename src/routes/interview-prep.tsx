import { createFileRoute } from '@tanstack/react-router'
import { CheckCircle, Lightbulb, Target, Video } from 'lucide-react'

export const Route = createFileRoute('/interview-prep')({
  component: InterviewPrepPage,
})

function InterviewPrepPage() {
  return (
    <div className="min-h-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Main Content */}
      <div className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Interview Preparation Guide
            </h1>
            <p className="text-lg text-slate-300">
              Master the techniques and strategies needed to ace your interviews
            </p>
          </div>

          {/* Videos Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <Video className="text-cyan-400" size={32} />
              Video Resources
            </h2>

            <div className="grid gap-8 md:grid-cols-2">
              {/* Elevator Pitch Video */}
              <div className="bg-slate-800 rounded-lg overflow-hidden border border-slate-700 hover:border-cyan-500/50 transition-colors">
                <div className="relative pt-[56.25%] bg-black">
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src="https://www.youtube.com/embed/Oy6S0iTZx54"
                    title="Elevator Pitch for Job Seekers: How to Answer Tell Me About Yourself"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    Elevator Pitch for Job Seekers
                  </h3>
                  <p className="text-slate-300 mb-4">
                    Learn how to answer "Tell Me About Yourself" with a
                    compelling elevator pitch. The most crucial activity during
                    the opening part of a client interview.
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <span className="px-3 py-1 bg-cyan-900 text-cyan-300 rounded-full text-sm">
                      Introduction
                    </span>
                    <span className="px-3 py-1 bg-blue-900 text-blue-300 rounded-full text-sm">
                      Self-Presentation
                    </span>
                  </div>
                </div>
              </div>

              {/* STAR Method Video */}
              <div className="bg-slate-800 rounded-lg overflow-hidden border border-slate-700 hover:border-cyan-500/50 transition-colors">
                <div className="relative pt-[56.25%] bg-black">
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src="https://www.youtube.com/embed/WRLF8ULhZmw"
                    title="How to use the STAR method to answer interview questions"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    STAR Method for Interview Questions
                  </h3>
                  <p className="text-slate-300 mb-4">
                    Master the STAR method - the most common and effective way
                    to answer behavioral interview questions with concrete
                    examples and clear outcomes.
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <span className="px-3 py-1 bg-purple-900 text-purple-300 rounded-full text-sm">
                      Technique
                    </span>
                    <span className="px-3 py-1 bg-green-900 text-green-300 rounded-full text-sm">
                      Storytelling
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Elevator Pitch Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <Target className="text-cyan-400" size={32} />
              Building Your Elevator Pitch
            </h2>
            <p className="text-slate-300 mb-6">
              Your elevator pitch answers four key questions. Use these
              recommendations to craft a compelling introduction:
            </p>

            <div className="space-y-4">
              <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
                <h3 className="text-lg font-semibold text-cyan-400 mb-3">
                  Who are you?
                </h3>
                <ul className="text-slate-300 space-y-2 ml-4">
                  <li>• Your name</li>
                  <li>• Your position/role</li>
                  <li>• Your technological expertise</li>
                </ul>
              </div>

              <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
                <h3 className="text-lg font-semibold text-blue-400 mb-3">
                  What do you do?
                </h3>
                <ul className="text-slate-300 space-y-2 ml-4">
                  <li>• Your areas of expertise</li>
                  <li>• Your project experience</li>
                  <li>• Your main responsibilities</li>
                </ul>
              </div>

              <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
                <h3 className="text-lg font-semibold text-purple-400 mb-3">
                  How will your skills contribute to the project?
                </h3>
                <ul className="text-slate-300 space-y-2 ml-4">
                  <li>• Highlight your soft and hard skills</li>
                  <li>• Explain your potential project impact</li>
                  <li>
                    • Share your selling points (outstanding expertise, unique
                    skills)
                  </li>
                </ul>
              </div>

              <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
                <h3 className="text-lg font-semibold text-green-400 mb-3">
                  What motivates you to join this project?
                </h3>
                <ul className="text-slate-300 space-y-2 ml-4">
                  <li>• The importance of the project</li>
                  <li>• Your area of interest (e.g., domain)</li>
                  <li>• How the project aligns with your goals</li>
                </ul>
              </div>
            </div>
          </div>

          {/* STAR Method Breakdown */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <Lightbulb className="text-yellow-400" size={32} />
              The STAR Method Explained
            </h2>
            <p className="text-slate-300 mb-6">
              Based on four key components, the STAR method is suitable for
              behavioral questions and helps you provide full, meaningful
              answers:
            </p>

            <div className="grid gap-4">
              <div className="bg-gradient-to-r from-cyan-900 to-cyan-800 rounded-lg p-6 border border-cyan-700">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-cyan-600 text-white font-bold">
                      S
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Situation
                    </h3>
                    <p className="text-slate-200">
                      The environment and relevant information regarding the
                      project situation. Set the context and background for your
                      story.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-lg p-6 border border-blue-700">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-600 text-white font-bold">
                      T
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Task
                    </h3>
                    <p className="text-slate-200">
                      Your specific responsibilities or role during the
                      situation. Explain what you were responsible for and your
                      role in the scenario.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-900 to-purple-800 rounded-lg p-6 border border-purple-700">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-purple-600 text-white font-bold">
                      A
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Action
                    </h3>
                    <p className="text-slate-200">
                      The actions you took upon the described situation. Focus
                      on what YOU did, not what the team did. This demonstrates
                      your initiative and problem-solving abilities.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-900 to-green-800 rounded-lg p-6 border border-green-700">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-green-600 text-white font-bold">
                      R
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Result
                    </h3>
                    <p className="text-slate-200">
                      The outcome of the actions you took. Share the positive
                      results with concrete examples and measurable impacts.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* STAR Method Tips */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <CheckCircle className="text-green-400" size={32} />
              STAR Method Tips
            </h2>
            <div className="space-y-3">
              <div className="flex gap-3 bg-slate-800 rounded-lg p-4 border border-slate-700">
                <span className="text-green-400 font-bold flex-shrink-0">
                  ✓
                </span>
                <span className="text-slate-300">
                  <strong>Focus on the "I":</strong> Emphasize your personal
                  actions, not the team's efforts
                </span>
              </div>
              <div className="flex gap-3 bg-slate-800 rounded-lg p-4 border border-slate-700">
                <span className="text-green-400 font-bold flex-shrink-0">
                  ✓
                </span>
                <span className="text-slate-300">
                  <strong>Provide concrete examples:</strong> Use specific
                  details and real situations
                </span>
              </div>
              <div className="flex gap-3 bg-slate-800 rounded-lg p-4 border border-slate-700">
                <span className="text-green-400 font-bold flex-shrink-0">
                  ✓
                </span>
                <span className="text-slate-300">
                  <strong>Highlight key accomplishments:</strong> Show what you
                  achieved and how you made an impact
                </span>
              </div>
              <div className="flex gap-3 bg-slate-800 rounded-lg p-4 border border-slate-700">
                <span className="text-green-400 font-bold flex-shrink-0">
                  ✓
                </span>
                <span className="text-slate-300">
                  <strong>Identify learning outcomes:</strong> Share key
                  takeaways from your experience
                </span>
              </div>
              <div className="flex gap-3 bg-slate-800 rounded-lg p-4 border border-slate-700">
                <span className="text-green-400 font-bold flex-shrink-0">
                  ✓
                </span>
                <span className="text-slate-300">
                  <strong>Protect confidentiality:</strong> Avoid revealing
                  names of customers or projects when giving examples
                </span>
              </div>
            </div>
          </div>

          {/* General Interview Tips */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">
              General Interview Recommendations
            </h2>
            <div className="space-y-3">
              <div className="flex gap-3 bg-slate-800 rounded-lg p-4 border border-slate-700">
                <span className="text-cyan-400 font-bold flex-shrink-0">→</span>
                <span className="text-slate-300">
                  <strong>Speak Slowly and Clearly:</strong> Take your time and
                  articulate your words well
                </span>
              </div>
              <div className="flex gap-3 bg-slate-800 rounded-lg p-4 border border-slate-700">
                <span className="text-cyan-400 font-bold flex-shrink-0">→</span>
                <span className="text-slate-300">
                  <strong>Engage in small talk:</strong> Build rapport with the
                  interviewer
                </span>
              </div>
              <div className="flex gap-3 bg-slate-800 rounded-lg p-4 border border-slate-700">
                <span className="text-cyan-400 font-bold flex-shrink-0">→</span>
                <span className="text-slate-300">
                  <strong>Don't overshare personal information:</strong>{' '}
                  Consider the possible consequences of what you share
                </span>
              </div>
              <div className="flex gap-3 bg-slate-800 rounded-lg p-4 border border-slate-700">
                <span className="text-cyan-400 font-bold flex-shrink-0">→</span>
                <span className="text-slate-300">
                  <strong>Practice regularly:</strong> Rehearse your answers and
                  pitch to build confidence
                </span>
              </div>
              <div className="flex gap-3 bg-slate-800 rounded-lg p-4 border border-slate-700">
                <span className="text-cyan-400 font-bold flex-shrink-0">→</span>
                <span className="text-slate-300">
                  <strong>Tailor your Elevator Pitch:</strong> Customize your
                  pitch to match the client's needs and project requirements
                </span>
              </div>
              <div className="flex gap-3 bg-slate-800 rounded-lg p-4 border border-slate-700">
                <span className="text-cyan-400 font-bold flex-shrink-0">→</span>
                <span className="text-slate-300">
                  <strong>Prepare for and ask questions:</strong> Have questions
                  ready for the closing part of the interview
                </span>
              </div>
              <div className="flex gap-3 bg-slate-800 rounded-lg p-4 border border-slate-700">
                <span className="text-cyan-400 font-bold flex-shrink-0">→</span>
                <span className="text-slate-300">
                  <strong>Ensure your equipment is working:</strong> Test all
                  audio, video, and technology before the meeting
                </span>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-cyan-900 to-blue-900 rounded-lg p-8 border border-cyan-700 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Practice?
            </h2>
            <p className="text-slate-300 mb-6">
              Now that you've learned the techniques, go back and apply them to
              the interview questions in our question bank
            </p>
            <a
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-lg transition-colors"
            >
              <span>Back to Questions</span>
              <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
