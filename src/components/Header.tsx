import { Link, useLocation } from '@tanstack/react-router'

import { useState } from 'react'
import { Home, Info, Menu, PlayCircle, X } from 'lucide-react'
import { KeyboardHintsButton } from './KeyboardHints'

const linkBaseStyles =
  'flex items-center gap-3 p-3 rounded-lg transition-colors mb-2'
const linkInactiveStyles = `${linkBaseStyles} hover:bg-gray-800`
const linkActiveStyles = `${linkBaseStyles} bg-cyan-600 [&:hover]:bg-cyan-600 [&:focus]:bg-cyan-600`

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  const isOnCategoryPage = location.pathname.startsWith('/categories/')

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}
      <header className="p-4 flex items-center justify-between bg-gray-800 text-white shadow-lg">
        <div className="flex items-center">
          <button
            onClick={() => setIsOpen(true)}
            className="p-2 hover:bg-gray-700 rounded-lg transition-colors cursor-pointer"
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
          <h1 className="ml-4 text-xl font-semibold">
            <Link to="/">
              <img src="/logo192.png" alt="Logo" className="h-10" />
            </Link>
          </h1>
        </div>
        <KeyboardHintsButton isRelevant={isOnCategoryPage} />
      </header>

      <aside
        className={`fixed top-0 left-0 h-full w-80 bg-gray-900 text-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out flex flex-col ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <h2 className="text-xl font-bold">Navigation</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 hover:bg-gray-800 rounded-lg transition-colors cursor-pointer"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        <nav className="flex-1 p-4 overflow-y-auto">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className={linkInactiveStyles}
            activeProps={{
              className: linkActiveStyles,
            }}
          >
            <Home size={20} />
            <span className="font-medium">Home</span>
          </Link>

          <Link
            to="/interview-prep"
            onClick={() => setIsOpen(false)}
            className={linkInactiveStyles}
            activeProps={{
              className: linkActiveStyles,
            }}
          >
            <PlayCircle size={20} />
            <span className="font-medium">Interview Prep</span>
          </Link>

          <Link
            to="/about"
            onClick={() => setIsOpen(false)}
            className={linkInactiveStyles}
            activeProps={{
              className: linkActiveStyles,
            }}
          >
            <Info size={20} />
            <span className="font-medium">About</span>
          </Link>
        </nav>
      </aside>
    </>
  )
}
