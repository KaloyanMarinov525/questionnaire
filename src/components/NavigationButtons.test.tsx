import { describe, expect, it, vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { NavigationButtons } from './NavigationButtons'

describe('NavigationButtons', () => {
  const mockCategorySelector = <div>Category Selector</div>

  it('should render previous and next buttons', () => {
    const onPrevious = vi.fn()
    const onNext = vi.fn()

    render(
      <NavigationButtons
        onPrevious={onPrevious}
        onNext={onNext}
        isFirstQuestion={false}
        isLastQuestion={false}
        categorySelector={mockCategorySelector}
      />,
    )

    expect(screen.getByText('Previous')).toBeInTheDocument()
    expect(screen.getByText('Next')).toBeInTheDocument()
  })

  it('should render category selector', () => {
    const onPrevious = vi.fn()
    const onNext = vi.fn()

    render(
      <NavigationButtons
        onPrevious={onPrevious}
        onNext={onNext}
        isFirstQuestion={false}
        isLastQuestion={false}
        categorySelector={mockCategorySelector}
      />,
    )

    expect(screen.getByText('Category Selector')).toBeInTheDocument()
  })

  it('should disable previous button when on first question', () => {
    const onPrevious = vi.fn()
    const onNext = vi.fn()
    const { container } = render(
      <NavigationButtons
        onPrevious={onPrevious}
        onNext={onNext}
        isFirstQuestion={true}
        isLastQuestion={false}
        categorySelector={mockCategorySelector}
      />,
    )

    const buttons = container.querySelectorAll('button')
    const previousButton = buttons[0]
    expect(previousButton).toBeDisabled()
  })

  it('should disable next button when on last question', () => {
    const onPrevious = vi.fn()
    const onNext = vi.fn()
    const { container } = render(
      <NavigationButtons
        onPrevious={onPrevious}
        onNext={onNext}
        isFirstQuestion={false}
        isLastQuestion={true}
        categorySelector={mockCategorySelector}
      />,
    )

    const buttons = container.querySelectorAll('button')
    const nextButton = buttons[1]
    expect(nextButton).toBeDisabled()
  })

  it('should call onPrevious when previous button is clicked', () => {
    const onPrevious = vi.fn()
    const onNext = vi.fn()

    render(
      <NavigationButtons
        onPrevious={onPrevious}
        onNext={onNext}
        isFirstQuestion={false}
        isLastQuestion={false}
        categorySelector={mockCategorySelector}
      />,
    )

    const previousButton = screen.getByText('Previous')
    fireEvent.click(previousButton)

    expect(onPrevious).toHaveBeenCalledOnce()
  })

  it('should call onNext when next button is clicked', () => {
    const onPrevious = vi.fn()
    const onNext = vi.fn()

    render(
      <NavigationButtons
        onPrevious={onPrevious}
        onNext={onNext}
        isFirstQuestion={false}
        isLastQuestion={false}
        categorySelector={mockCategorySelector}
      />,
    )

    const nextButton = screen.getByText('Next')
    fireEvent.click(nextButton)

    expect(onNext).toHaveBeenCalledOnce()
  })

  it('should disable both buttons when on first and last question', () => {
    const onPrevious = vi.fn()
    const onNext = vi.fn()
    const { container } = render(
      <NavigationButtons
        onPrevious={onPrevious}
        onNext={onNext}
        isFirstQuestion={true}
        isLastQuestion={true}
        categorySelector={mockCategorySelector}
      />,
    )

    const buttons = container.querySelectorAll('button')
    expect(buttons[0]).toBeDisabled()
    expect(buttons[1]).toBeDisabled()
  })

  it('should enable both buttons when not on first or last question', () => {
    const onPrevious = vi.fn()
    const onNext = vi.fn()
    const { container } = render(
      <NavigationButtons
        onPrevious={onPrevious}
        onNext={onNext}
        isFirstQuestion={false}
        isLastQuestion={false}
        categorySelector={mockCategorySelector}
      />,
    )

    const buttons = container.querySelectorAll('button')
    expect(buttons[0]).not.toBeDisabled()
    expect(buttons[1]).not.toBeDisabled()
  })

  it('should handle rapid clicking of next button', () => {
    const onPrevious = vi.fn()
    const onNext = vi.fn()

    render(
      <NavigationButtons
        onPrevious={onPrevious}
        onNext={onNext}
        isFirstQuestion={false}
        isLastQuestion={false}
        categorySelector={mockCategorySelector}
      />,
    )

    const nextButton = screen.getByText('Next')
    fireEvent.click(nextButton)
    fireEvent.click(nextButton)
    fireEvent.click(nextButton)

    expect(onNext).toHaveBeenCalledTimes(3)
  })

  it('should handle rapid clicking of previous button', () => {
    const onPrevious = vi.fn()
    const onNext = vi.fn()

    render(
      <NavigationButtons
        onPrevious={onPrevious}
        onNext={onNext}
        isFirstQuestion={false}
        isLastQuestion={false}
        categorySelector={mockCategorySelector}
      />,
    )

    const previousButton = screen.getByText('Previous')
    fireEvent.click(previousButton)
    fireEvent.click(previousButton)
    fireEvent.click(previousButton)

    expect(onPrevious).toHaveBeenCalledTimes(3)
  })
})
