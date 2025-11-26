import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ProgressIndicator } from './ProgressIndicator'

describe('ProgressIndicator', () => {
  it('should render question count and total', () => {
    render(<ProgressIndicator currentIndex={0} totalQuestions={10} />)
    expect(screen.getByText('Question 1 of 10')).toBeInTheDocument()
  })

  it('should calculate and display correct percentage for middle question', () => {
    render(<ProgressIndicator currentIndex={4} totalQuestions={10} />)
    expect(screen.getByText('50%')).toBeInTheDocument()
  })

  it('should show 10% for first question', () => {
    render(<ProgressIndicator currentIndex={0} totalQuestions={10} />)
    expect(screen.getByText('10%')).toBeInTheDocument()
  })

  it('should show 100% for last question', () => {
    render(<ProgressIndicator currentIndex={9} totalQuestions={10} />)
    expect(screen.getByText('100%')).toBeInTheDocument()
  })

  it('should handle single question', () => {
    render(<ProgressIndicator currentIndex={0} totalQuestions={1} />)
    expect(screen.getByText('Question 1 of 1')).toBeInTheDocument()
    expect(screen.getByText('100%')).toBeInTheDocument()
  })

  it('should handle large number of questions', () => {
    render(<ProgressIndicator currentIndex={99} totalQuestions={100} />)
    expect(screen.getByText('Question 100 of 100')).toBeInTheDocument()
    expect(screen.getByText('100%')).toBeInTheDocument()
  })

  it('should render progress bar', () => {
    const { container } = render(
      <ProgressIndicator currentIndex={2} totalQuestions={10} />,
    )
    const progressBar = container.querySelector('div[style*="width"]')
    expect(progressBar).toBeInTheDocument()
  })

  it('should set correct progress bar width', () => {
    const { container } = render(
      <ProgressIndicator currentIndex={4} totalQuestions={10} />,
    )
    const progressBar = container.querySelector(
      'div[style*="width"]',
    ) as HTMLElement
    expect(progressBar.style.width).toBe('50%')
  })

  it('should set progress bar to 10% for first question', () => {
    const { container } = render(
      <ProgressIndicator currentIndex={0} totalQuestions={10} />,
    )
    const progressBar = container.querySelector(
      'div[style*="width"]',
    ) as HTMLElement
    expect(progressBar.style.width).toBe('10%')
  })

  it('should render with rounded progress bar container', () => {
    const { container } = render(
      <ProgressIndicator currentIndex={5} totalQuestions={10} />,
    )
    const progressContainer = container.querySelector('div.rounded-full')
    expect(progressContainer).toBeInTheDocument()
  })

  it('should render progress text with correct formatting', () => {
    render(<ProgressIndicator currentIndex={0} totalQuestions={5} />)
    expect(screen.getByText('Question 1 of 5')).toBeInTheDocument()
  })

  it('should display percentage with % sign', () => {
    render(<ProgressIndicator currentIndex={2} totalQuestions={5} />)
    expect(screen.getByText('60%')).toBeInTheDocument()
  })

  it('should calculate correct percentage for odd divisions', () => {
    render(<ProgressIndicator currentIndex={1} totalQuestions={3} />)
    expect(screen.getByText('67%')).toBeInTheDocument()
  })

  it('should have progress bar with gradient classes', () => {
    const { container } = render(
      <ProgressIndicator currentIndex={3} totalQuestions={10} />,
    )
    const progressBar = container.querySelector('div.bg-gradient-to-r')
    expect(progressBar).toBeInTheDocument()
  })

  it('should have progress bar with transition classes', () => {
    const { container } = render(
      <ProgressIndicator currentIndex={5} totalQuestions={10} />,
    )
    const progressBar = container.querySelector('div.transition-all')
    expect(progressBar).toBeInTheDocument()
  })

  it('should render progress bar wrapper with correct classes', () => {
    const { container } = render(
      <ProgressIndicator currentIndex={3} totalQuestions={10} />,
    )
    const wrapper = container.querySelector('div.w-full')
    expect(wrapper).toBeInTheDocument()
    expect(wrapper).toHaveClass('h-2')
    expect(wrapper).toHaveClass('bg-slate-700')
    expect(wrapper).toHaveClass('rounded-full')
    expect(wrapper).toHaveClass('overflow-hidden')
  })

  it('should render top container with flex and justify-between', () => {
    const { container } = render(
      <ProgressIndicator currentIndex={2} totalQuestions={8} />,
    )
    const topContainer = container.querySelector('div.flex')
    expect(topContainer).toBeInTheDocument()
    expect(topContainer).toHaveClass('justify-between')
  })

  it('should render main container with margin bottom', () => {
    const { container } = render(
      <ProgressIndicator currentIndex={1} totalQuestions={5} />,
    )
    const mainContainer = container.querySelector('div.mb-8')
    expect(mainContainer).toBeInTheDocument()
  })

  it('should display question label with correct text styling', () => {
    render(<ProgressIndicator currentIndex={0} totalQuestions={5} />)
    const label = screen.getByText('Question 1 of 5')
    expect(label).toHaveClass('text-sm')
    expect(label).toHaveClass('font-medium')
    expect(label).toHaveClass('text-slate-400')
  })

  it('should display percentage with cyan color', () => {
    render(<ProgressIndicator currentIndex={4} totalQuestions={5} />)
    const percentage = screen.getByText('100%')
    expect(percentage).toHaveClass('text-cyan-400')
  })

  it('should have progress bar with cyan to blue gradient', () => {
    const { container } = render(
      <ProgressIndicator currentIndex={3} totalQuestions={10} />,
    )
    const progressBar = container.querySelector('div.bg-gradient-to-r')
    expect(progressBar).toHaveClass('from-cyan-500')
    expect(progressBar).toHaveClass('to-blue-500')
  })

  it('should calculate percentage with rounding for 1/3', () => {
    render(<ProgressIndicator currentIndex={0} totalQuestions={3} />)
    // (0 + 1) / 3 * 100 = 33.33, rounds to 33
    expect(screen.getByText('33%')).toBeInTheDocument()
  })

  it('should handle two question total correctly', () => {
    render(<ProgressIndicator currentIndex={0} totalQuestions={2} />)
    expect(screen.getByText('Question 1 of 2')).toBeInTheDocument()
    expect(screen.getByText('50%')).toBeInTheDocument()
  })

  it('should display correct percentage for second of two questions', () => {
    render(<ProgressIndicator currentIndex={1} totalQuestions={2} />)
    expect(screen.getByText('Question 2 of 2')).toBeInTheDocument()
    expect(screen.getByText('100%')).toBeInTheDocument()
  })
})
