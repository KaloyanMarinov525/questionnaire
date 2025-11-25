import { useEffect } from 'react'

interface KeyboardNavigationOptions {
  onArrowUp?: () => void
  onArrowDown?: () => void
  onArrowLeft?: () => void
  onArrowRight?: () => void
  onSpace?: () => void
  onEnter?: () => void
}

/**
 * Hook to handle keyboard navigation with arrow keys and other shortcuts
 */
export function useKeyboardNavigation(options: KeyboardNavigationOptions) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Don't trigger shortcuts when typing in an input
      if (event.target instanceof HTMLInputElement ||
          event.target instanceof HTMLTextAreaElement ||
          event.target instanceof HTMLSelectElement) {
        return
      }

      switch (event.key) {
        case 'ArrowUp':
          event.preventDefault()
          options.onArrowUp?.()
          break
        case 'ArrowDown':
          event.preventDefault()
          options.onArrowDown?.()
          break
        case 'ArrowLeft':
          event.preventDefault()
          options.onArrowLeft?.()
          break
        case 'ArrowRight':
          event.preventDefault()
          options.onArrowRight?.()
          break
        case ' ':
          // Only prevent default if there's a Space handler
          if (options.onSpace) {
            event.preventDefault()
            options.onSpace()
          }
          break
        case 'Enter':
          // Only prevent default if there's an Enter handler
          if (options.onEnter) {
            event.preventDefault()
            options.onEnter()
          }
          break
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [options])
}
