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
      <ProgressIndicator currentIndex={2} totalQuestions={10} />
    )
    const progressBar = container.querySelector('div[style*="width"]')
    expect(progressBar).toBeInTheDocument()
  })

  it('should set correct progress bar width', () => {
    const { container } = render(
      <ProgressIndicator currentIndex={4} totalQuestions={10} />
    )
    const progressBar = container.querySelector('div[style*="width"]') as HTMLElement
    expect(progressBar.style.width).toBe('50%')
  })

  it('should set progress bar to 10% for first question', () => {
    const { container } = render(
      <ProgressIndicator currentIndex={0} totalQuestions={10} />
    )
    const progressBar = container.querySelector('div[style*="width"]') as HTMLElement
    expect(progressBar.style.width).toBe('10%')
  })

  it('should render with rounded progress bar container', () => {
    const { container } = render(
      <ProgressIndicator currentIndex={5} totalQuestions={10} />
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
      <ProgressIndicator currentIndex={3} totalQuestions={10} />
    )
    const progressBar = container.querySelector(
      'div.bg-gradient-to-r'
    )
    expect(progressBar).toBeInTheDocument()
  })

  it('should have progress bar with transition classes', () => {
    const { container } = render(
      <ProgressIndicator currentIndex={5} totalQuestions={10} />
    )
    const progressBar = container.querySelector(
      'div.transition-all'
    )
    expect(progressBar).toBeInTheDocument()
  })
})
