import { describe, expect, it, vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { createQuestionId } from '../data/types'
import { QuestionCard } from './QuestionCard'

describe('QuestionCard', () => {
  const mockQuestion = {
    id: createQuestionId('test-id'),
    title: 'What is React?',
    answer: '**React** is a JavaScript library for building user interfaces.',
    tags: ['React', 'JavaScript'],
  }

  it('should render question title', () => {
    const onToggle = vi.fn()
    render(
      <QuestionCard
        question={mockQuestion}
        isAnswerExpanded={false}
        onToggleAnswer={onToggle}
      />,
    )
    expect(screen.getByText('What is React?')).toBeInTheDocument()
  })

  it('should render question tags', () => {
    const onToggle = vi.fn()
    render(
      <QuestionCard
        question={mockQuestion}
        isAnswerExpanded={false}
        onToggleAnswer={onToggle}
      />,
    )
    expect(screen.getByText('React')).toBeInTheDocument()
    expect(screen.getByText('JavaScript')).toBeInTheDocument()
  })

  it('should show "Show Answer" when collapsed', () => {
    const onToggle = vi.fn()
    render(
      <QuestionCard
        question={mockQuestion}
        isAnswerExpanded={false}
        onToggleAnswer={onToggle}
      />,
    )
    expect(screen.getByText(/Show Answer/)).toBeInTheDocument()
  })

  it('should show "Hide Answer" when expanded', () => {
    const onToggle = vi.fn()
    render(
      <QuestionCard
        question={mockQuestion}
        isAnswerExpanded={true}
        onToggleAnswer={onToggle}
      />,
    )
    expect(screen.getByText(/Hide Answer/)).toBeInTheDocument()
  })

  it('should call onToggleAnswer when button is clicked', () => {
    const onToggle = vi.fn()
    render(
      <QuestionCard
        question={mockQuestion}
        isAnswerExpanded={false}
        onToggleAnswer={onToggle}
      />,
    )
    const button = screen.getByRole('button')
    fireEvent.click(button)
    expect(onToggle).toHaveBeenCalledOnce()
  })

  it('should render answer content when expanded', () => {
    const onToggle = vi.fn()
    const { container } = render(
      <QuestionCard
        question={mockQuestion}
        isAnswerExpanded={true}
        onToggleAnswer={onToggle}
      />,
    )
    expect(container.querySelector('.markdown-content')).toBeInTheDocument()
  })

  it('should not render answer content when collapsed', () => {
    const onToggle = vi.fn()
    const { container } = render(
      <QuestionCard
        question={mockQuestion}
        isAnswerExpanded={false}
        onToggleAnswer={onToggle}
      />,
    )
    expect(container.querySelector('.markdown-content')).not.toBeInTheDocument()
  })

  it('should handle questions without tags', () => {
    const onToggle = vi.fn()
    const questionNoTags = { ...mockQuestion, tags: [] }
    const { container } = render(
      <QuestionCard
        question={questionNoTags}
        isAnswerExpanded={false}
        onToggleAnswer={onToggle}
      />,
    )
    expect(screen.getByText('What is React?')).toBeInTheDocument()
    expect(container.querySelectorAll('span')).not.toContain(
      expect.objectContaining({ textContent: 'React' }),
    )
  })

  it('should toggle answer multiple times', () => {
    const onToggle = vi.fn()
    const { rerender } = render(
      <QuestionCard
        question={mockQuestion}
        isAnswerExpanded={false}
        onToggleAnswer={onToggle}
      />,
    )

    expect(screen.getByText(/Show Answer/)).toBeInTheDocument()

    rerender(
      <QuestionCard
        question={mockQuestion}
        isAnswerExpanded={true}
        onToggleAnswer={onToggle}
      />,
    )

    expect(screen.getByText(/Hide Answer/)).toBeInTheDocument()

    rerender(
      <QuestionCard
        question={mockQuestion}
        isAnswerExpanded={false}
        onToggleAnswer={onToggle}
      />,
    )

    expect(screen.getByText(/Show Answer/)).toBeInTheDocument()
  })

  it('should render multiple tags', () => {
    const onToggle = vi.fn()
    const questionMultipleTags = {
      ...mockQuestion,
      tags: ['React', 'JavaScript', 'Hooks', 'Frontend'],
    }
    render(
      <QuestionCard
        question={questionMultipleTags}
        isAnswerExpanded={false}
        onToggleAnswer={onToggle}
      />,
    )

    expect(screen.getByText('React')).toBeInTheDocument()
    expect(screen.getByText('JavaScript')).toBeInTheDocument()
    expect(screen.getByText('Hooks')).toBeInTheDocument()
    expect(screen.getByText('Frontend')).toBeInTheDocument()
  })

  it('should call onToggleAnswer multiple times', () => {
    const onToggle = vi.fn()
    render(
      <QuestionCard
        question={mockQuestion}
        isAnswerExpanded={false}
        onToggleAnswer={onToggle}
      />,
    )
    const button = screen.getByRole('button')

    fireEvent.click(button)
    fireEvent.click(button)
    fireEvent.click(button)

    expect(onToggle).toHaveBeenCalledTimes(3)
  })

  it('should display markdown with proper formatting', () => {
    const onToggle = vi.fn()
    const { container } = render(
      <QuestionCard
        question={mockQuestion}
        isAnswerExpanded={true}
        onToggleAnswer={onToggle}
      />,
    )

    const markdownContent = container.querySelector('.markdown-content')
    expect(markdownContent).toBeInTheDocument()
    expect(markdownContent?.textContent).toContain('React')
  })

  it('should display correct button arrow when collapsed', () => {
    const onToggle = vi.fn()
    render(
      <QuestionCard
        question={mockQuestion}
        isAnswerExpanded={false}
        onToggleAnswer={onToggle}
      />,
    )
    const button = screen.getByRole('button')
    expect(button.textContent).toContain('▶')
    expect(button.textContent).not.toContain('▼')
  })

  it('should display correct button arrow when expanded', () => {
    const onToggle = vi.fn()
    render(
      <QuestionCard
        question={mockQuestion}
        isAnswerExpanded={true}
        onToggleAnswer={onToggle}
      />,
    )
    const button = screen.getByRole('button')
    expect(button.textContent).toContain('▼')
    expect(button.textContent).not.toContain('▶')
  })

  it('should display answer section with expanded state', () => {
    const onToggle = vi.fn()
    const { container, rerender } = render(
      <QuestionCard
        question={mockQuestion}
        isAnswerExpanded={false}
        onToggleAnswer={onToggle}
      />,
    )

    // Initially should not show markdown
    expect(container.querySelector('.markdown-content')).not.toBeInTheDocument()

    // After expanding, should show markdown
    rerender(
      <QuestionCard
        question={mockQuestion}
        isAnswerExpanded={true}
        onToggleAnswer={onToggle}
      />,
    )

    expect(container.querySelector('.markdown-content')).toBeInTheDocument()
  })

  it('should render answer text content when expanded', () => {
    const onToggle = vi.fn()
    const { container } = render(
      <QuestionCard
        question={mockQuestion}
        isAnswerExpanded={true}
        onToggleAnswer={onToggle}
      />,
    )

    const answerSection = container.querySelector('.markdown-content')
    expect(answerSection).toBeInTheDocument()
    expect(answerSection?.textContent).toContain('React')
  })

  it('should not render answer text when collapsed', () => {
    const onToggle = vi.fn()
    const { container } = render(
      <QuestionCard
        question={mockQuestion}
        isAnswerExpanded={false}
        onToggleAnswer={onToggle}
      />,
    )

    const answerSection = container.querySelector('.markdown-content')
    expect(answerSection).not.toBeInTheDocument()
  })
})
