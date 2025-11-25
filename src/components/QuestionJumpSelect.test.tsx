import { describe, expect, it, vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { createQuestionId } from '../data/types'
import { QuestionJumpSelect, formatQuestionTitle } from './QuestionJumpSelect'

describe('QuestionJumpSelect', () => {
  const mockQuestions = [
    {
      id: createQuestionId('q1'),
      title: 'What is React?',
      answer: 'React is a library',
      tags: [],
    },
    {
      id: createQuestionId('q2'),
      title: 'What are hooks?',
      answer: 'Hooks are functions',
      tags: [],
    },
    {
      id: createQuestionId('q3'),
      title: 'What is JSX?',
      answer: 'JSX is syntax',
      tags: [],
    },
  ]

  it('should render label', () => {
    const onSelect = vi.fn()
    render(
      <QuestionJumpSelect
        questions={mockQuestions}
        currentIndex={0}
        onSelectQuestion={onSelect}
      />
    )

    expect(screen.getByText('Jump to Question:')).toBeInTheDocument()
  })

  it('should render all question options', () => {
    const onSelect = vi.fn()
    render(
      <QuestionJumpSelect
        questions={mockQuestions}
        currentIndex={0}
        onSelectQuestion={onSelect}
      />
    )

    expect(screen.getByText(/What is React/)).toBeInTheDocument()
    expect(screen.getByText(/What are hooks/)).toBeInTheDocument()
    expect(screen.getByText(/What is JSX/)).toBeInTheDocument()
  })

  it('should display truncated titles for long questions', () => {
    const longTitleQuestions = [
      {
        id: createQuestionId('q1'),
        title: 'This is a very long question title that should be truncated',
        answer: 'Answer',
        tags: [],
      },
    ]

    const onSelect = vi.fn()
    render(
      <QuestionJumpSelect
        questions={longTitleQuestions}
        currentIndex={0}
        onSelectQuestion={onSelect}
      />
    )

    expect(screen.getByText(/\.\.\./)).toBeInTheDocument()
  })

  it('should show current index as selected', () => {
    const onSelect = vi.fn()
    const { container } = render(
      <QuestionJumpSelect
        questions={mockQuestions}
        currentIndex={1}
        onSelectQuestion={onSelect}
      />
    )

    const select = container.querySelector('select') as HTMLSelectElement
    expect(select.value).toBe('1')
  })

  it('should call onSelectQuestion when selection changes', () => {
    const onSelect = vi.fn()
    const { container } = render(
      <QuestionJumpSelect
        questions={mockQuestions}
        currentIndex={0}
        onSelectQuestion={onSelect}
      />
    )

    const select = container.querySelector('select') as HTMLSelectElement
    fireEvent.change(select, { target: { value: '2' } })

    expect(onSelect).toHaveBeenCalledWith(2)
  })

  it('should not truncate short titles', () => {
    const shortTitleQuestions = [
      {
        id: createQuestionId('q1'),
        title: 'Short title',
        answer: 'Answer',
        tags: [],
      },
    ]

    const onSelect = vi.fn()
    const { container } = render(
      <QuestionJumpSelect
        questions={shortTitleQuestions}
        currentIndex={0}
        onSelectQuestion={onSelect}
      />
    )

    expect(screen.getByText('Q1: Short title')).toBeInTheDocument()
    expect(container.textContent).not.toContain('...')
  })

  it('should display question numbers correctly', () => {
    const onSelect = vi.fn()
    render(
      <QuestionJumpSelect
        questions={mockQuestions}
        currentIndex={0}
        onSelectQuestion={onSelect}
      />
    )

    expect(screen.getByText(/Q1:/)).toBeInTheDocument()
    expect(screen.getByText(/Q2:/)).toBeInTheDocument()
    expect(screen.getByText(/Q3:/)).toBeInTheDocument()
  })

  it('should update selected value when currentIndex changes', () => {
    const onSelect = vi.fn()
    const { container, rerender } = render(
      <QuestionJumpSelect
        questions={mockQuestions}
        currentIndex={0}
        onSelectQuestion={onSelect}
      />
    )

    let select = container.querySelector('select') as HTMLSelectElement
    expect(select.value).toBe('0')

    rerender(
      <QuestionJumpSelect
        questions={mockQuestions}
        currentIndex={2}
        onSelectQuestion={onSelect}
      />
    )

    select = container.querySelector('select') as HTMLSelectElement
    expect(select.value).toBe('2')
  })

  describe('formatQuestionTitle', () => {
    it('should return title as-is when shorter than max length', () => {
      const result = formatQuestionTitle('Short title')
      expect(result).toBe('Short title')
    })

    it('should truncate and add ellipsis for long titles', () => {
      const result = formatQuestionTitle('This is a very long question title that should be truncated')
      expect(result).toContain('...')
      expect(result.length).toBeLessThan('This is a very long question title that should be truncated'.length)
    })

    it('should respect custom max length', () => {
      const result = formatQuestionTitle('Hello World Test', 5)
      expect(result).toBe('Hello...')
    })

    it('should handle exactly max length title', () => {
      const title = 'A'.repeat(40)
      const result = formatQuestionTitle(title)
      expect(result).toBe(title)
      expect(result).not.toContain('...')
    })

    it('should handle title exactly one char over max length', () => {
      const title = 'A'.repeat(41)
      const result = formatQuestionTitle(title)
      expect(result).toContain('...')
      expect(result).toBe('A'.repeat(40) + '...')
    })

    it('should handle empty title', () => {
      const result = formatQuestionTitle('')
      expect(result).toBe('')
    })

    it('should handle single character title', () => {
      const result = formatQuestionTitle('A')
      expect(result).toBe('A')
    })

    it('should default to 40 character max length', () => {
      const longTitle = 'A'.repeat(50)
      const result = formatQuestionTitle(longTitle)
      expect(result).toBe('A'.repeat(40) + '...')
    })

    it('should handle zero as max length', () => {
      const result = formatQuestionTitle('Hello', 0)
      expect(result).toBe('...')
    })

    it('should handle special characters in title', () => {
      const title = 'What is this & that? (Test)'
      const result = formatQuestionTitle(title)
      expect(result).toBe(title)
    })

    it('should handle very long special character title', () => {
      const title = 'What is this & that? (Test) - with a very long question about something important'
      const result = formatQuestionTitle(title)
      expect(result).toContain('...')
      expect(result.length).toBeLessThan(title.length)
    })
  })
})
