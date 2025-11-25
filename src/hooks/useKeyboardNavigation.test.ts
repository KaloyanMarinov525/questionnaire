import { afterEach, describe, expect, it, vi } from 'vitest'
import { renderHook } from '@testing-library/react'
import { useKeyboardNavigation } from './useKeyboardNavigation'

describe('useKeyboardNavigation', () => {
  afterEach(() => {
    vi.clearAllMocks()
  })

  it('should handle arrow left key', () => {
    const onArrowLeft = vi.fn()
    renderHook(() => useKeyboardNavigation({ onArrowLeft }))

    const event = new KeyboardEvent('keydown', { key: 'ArrowLeft' })
    window.dispatchEvent(event)

    expect(onArrowLeft).toHaveBeenCalledOnce()
  })

  it('should handle arrow right key', () => {
    const onArrowRight = vi.fn()
    renderHook(() => useKeyboardNavigation({ onArrowRight }))

    const event = new KeyboardEvent('keydown', { key: 'ArrowRight' })
    window.dispatchEvent(event)

    expect(onArrowRight).toHaveBeenCalledOnce()
  })

  it('should handle arrow up key', () => {
    const onArrowUp = vi.fn()
    renderHook(() => useKeyboardNavigation({ onArrowUp }))

    const event = new KeyboardEvent('keydown', { key: 'ArrowUp' })
    window.dispatchEvent(event)

    expect(onArrowUp).toHaveBeenCalledOnce()
  })

  it('should handle arrow down key', () => {
    const onArrowDown = vi.fn()
    renderHook(() => useKeyboardNavigation({ onArrowDown }))

    const event = new KeyboardEvent('keydown', { key: 'ArrowDown' })
    window.dispatchEvent(event)

    expect(onArrowDown).toHaveBeenCalledOnce()
  })

  it('should handle space key', () => {
    const onSpace = vi.fn()
    renderHook(() => useKeyboardNavigation({ onSpace }))

    const event = new KeyboardEvent('keydown', { key: ' ' })
    window.dispatchEvent(event)

    expect(onSpace).toHaveBeenCalledOnce()
  })

  it('should ignore keyboard events from input elements', () => {
    const onArrowLeft = vi.fn()
    renderHook(() => useKeyboardNavigation({ onArrowLeft }))

    const input = document.createElement('input')
    const event = new KeyboardEvent('keydown', { key: 'ArrowLeft' })
    Object.defineProperty(event, 'target', { value: input, enumerable: true })
    window.dispatchEvent(event)

    expect(onArrowLeft).not.toHaveBeenCalled()
  })

  it('should ignore keyboard events from textarea elements', () => {
    const onArrowLeft = vi.fn()
    renderHook(() => useKeyboardNavigation({ onArrowLeft }))

    const textarea = document.createElement('textarea')
    const event = new KeyboardEvent('keydown', { key: 'ArrowLeft' })
    Object.defineProperty(event, 'target', {
      value: textarea,
      enumerable: true,
    })
    window.dispatchEvent(event)

    expect(onArrowLeft).not.toHaveBeenCalled()
  })

  it('should ignore keyboard events from select elements', () => {
    const onArrowLeft = vi.fn()
    renderHook(() => useKeyboardNavigation({ onArrowLeft }))

    const select = document.createElement('select')
    const event = new KeyboardEvent('keydown', { key: 'ArrowLeft' })
    Object.defineProperty(event, 'target', { value: select, enumerable: true })
    window.dispatchEvent(event)

    expect(onArrowLeft).not.toHaveBeenCalled()
  })

  it('should clean up event listener on unmount', () => {
    const onArrowLeft = vi.fn()
    const removeEventListenerSpy = vi.spyOn(window, 'removeEventListener')

    const { unmount } = renderHook(() => useKeyboardNavigation({ onArrowLeft }))

    unmount()

    expect(removeEventListenerSpy).toHaveBeenCalledWith(
      'keydown',
      expect.any(Function),
    )

    removeEventListenerSpy.mockRestore()
  })

  it('should prevent default on arrow key events', () => {
    const onArrowLeft = vi.fn()
    renderHook(() => useKeyboardNavigation({ onArrowLeft }))

    const event = new KeyboardEvent('keydown', { key: 'ArrowLeft' })
    const preventDefaultSpy = vi.spyOn(event, 'preventDefault')
    window.dispatchEvent(event)

    expect(preventDefaultSpy).toHaveBeenCalled()
  })

  it('should prevent default on space key when handler exists', () => {
    const onSpace = vi.fn()
    renderHook(() => useKeyboardNavigation({ onSpace }))

    const event = new KeyboardEvent('keydown', { key: ' ' })
    const preventDefaultSpy = vi.spyOn(event, 'preventDefault')
    window.dispatchEvent(event)

    expect(preventDefaultSpy).toHaveBeenCalled()
  })

  it('should not prevent default on space key when no handler', () => {
    renderHook(() => useKeyboardNavigation({}))

    const event = new KeyboardEvent('keydown', { key: ' ' })
    const preventDefaultSpy = vi.spyOn(event, 'preventDefault')
    window.dispatchEvent(event)

    expect(preventDefaultSpy).not.toHaveBeenCalled()
  })

  it('should handle multiple arrow key directions', () => {
    const onArrowUp = vi.fn()
    const onArrowDown = vi.fn()
    const onArrowLeft = vi.fn()
    const onArrowRight = vi.fn()

    renderHook(() =>
      useKeyboardNavigation({
        onArrowUp,
        onArrowDown,
        onArrowLeft,
        onArrowRight,
      }),
    )

    const upEvent = new KeyboardEvent('keydown', { key: 'ArrowUp' })
    const downEvent = new KeyboardEvent('keydown', { key: 'ArrowDown' })
    const leftEvent = new KeyboardEvent('keydown', { key: 'ArrowLeft' })
    const rightEvent = new KeyboardEvent('keydown', { key: 'ArrowRight' })

    window.dispatchEvent(upEvent)
    window.dispatchEvent(downEvent)
    window.dispatchEvent(leftEvent)
    window.dispatchEvent(rightEvent)

    expect(onArrowUp).toHaveBeenCalledOnce()
    expect(onArrowDown).toHaveBeenCalledOnce()
    expect(onArrowLeft).toHaveBeenCalledOnce()
    expect(onArrowRight).toHaveBeenCalledOnce()
  })

  it('should ignore keyboard events from button elements in forms', () => {
    const onArrowLeft = vi.fn()
    renderHook(() => useKeyboardNavigation({ onArrowLeft }))

    const button = document.createElement('button')
    const event = new KeyboardEvent('keydown', { key: 'ArrowLeft' })
    Object.defineProperty(event, 'target', { value: button, enumerable: true })
    window.dispatchEvent(event)

    expect(onArrowLeft).toHaveBeenCalledOnce()
  })

  it('should call all handlers that are defined', () => {
    const onArrowLeft = vi.fn()
    const onArrowRight = vi.fn()
    renderHook(() =>
      useKeyboardNavigation({
        onArrowLeft,
        onArrowRight,
      }),
    )

    window.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowLeft' }))
    window.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowRight' }))

    expect(onArrowLeft).toHaveBeenCalledOnce()
    expect(onArrowRight).toHaveBeenCalledOnce()
  })

  it('should handle enter key', () => {
    const onEnter = vi.fn()
    renderHook(() => useKeyboardNavigation({ onEnter }))

    const event = new KeyboardEvent('keydown', { key: 'Enter' })
    window.dispatchEvent(event)

    expect(onEnter).toHaveBeenCalledOnce()
  })

  it('should prevent default on enter key when handler exists', () => {
    const onEnter = vi.fn()
    renderHook(() => useKeyboardNavigation({ onEnter }))

    const event = new KeyboardEvent('keydown', { key: 'Enter' })
    const preventDefaultSpy = vi.spyOn(event, 'preventDefault')
    window.dispatchEvent(event)

    expect(preventDefaultSpy).toHaveBeenCalled()
  })

  it('should not prevent default on enter key when no handler', () => {
    renderHook(() => useKeyboardNavigation({}))

    const event = new KeyboardEvent('keydown', { key: 'Enter' })
    const preventDefaultSpy = vi.spyOn(event, 'preventDefault')
    window.dispatchEvent(event)

    expect(preventDefaultSpy).not.toHaveBeenCalled()
  })
})
