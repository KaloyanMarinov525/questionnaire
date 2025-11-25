import { describe, expect, it, vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { createCategoryId } from '../data/types'
import { CategorySelector } from './CategorySelector'

describe('CategorySelector', () => {
  const mockCategories = [
    {
      id: createCategoryId('react-core'),
      name: 'React Core',
      description: 'Core React concepts',
      color: 'from-cyan-500 to-cyan-600' as const,
      questions: [],
    },
    {
      id: createCategoryId('js-fundamentals'),
      name: 'JavaScript Fundamentals',
      description: 'JavaScript basics',
      color: 'from-yellow-500 to-yellow-600' as const,
      questions: [],
    },
  ]

  it('should render all category options', () => {
    const onSelect = vi.fn()
    render(
      <CategorySelector
        categories={mockCategories}
        currentCategoryId="react-core"
        onSelectCategory={onSelect}
      />,
    )

    expect(screen.getByText(/React Core/)).toBeInTheDocument()
    expect(screen.getByText(/JavaScript Fundamentals/)).toBeInTheDocument()
  })

  it('should display current category as selected', () => {
    const onSelect = vi.fn()
    const { container } = render(
      <CategorySelector
        categories={mockCategories}
        currentCategoryId="react-core"
        onSelectCategory={onSelect}
      />,
    )

    const select = container.querySelector('select') as HTMLSelectElement
    expect(select.value).toBe('react-core')
  })

  it('should call onSelectCategory when selection changes', () => {
    const onSelect = vi.fn()
    const { container } = render(
      <CategorySelector
        categories={mockCategories}
        currentCategoryId="react-core"
        onSelectCategory={onSelect}
      />,
    )

    const select = container.querySelector('select') as HTMLSelectElement
    fireEvent.change(select, { target: { value: 'js-fundamentals' } })

    expect(onSelect).toHaveBeenCalledWith('js-fundamentals')
  })

  it('should display question count for each category', () => {
    const categoriesWithQuestions = [
      { ...mockCategories[0], questions: [{}, {}] as any },
      { ...mockCategories[1], questions: [{}, {}, {}] as any },
    ]

    const onSelect = vi.fn()
    render(
      <CategorySelector
        categories={categoriesWithQuestions}
        currentCategoryId="react-core"
        onSelectCategory={onSelect}
      />,
    )

    expect(screen.getByText(/2\)/)).toBeInTheDocument()
    expect(screen.getByText(/3\)/)).toBeInTheDocument()
  })

  it('should handle single category', () => {
    const onSelect = vi.fn()
    render(
      <CategorySelector
        categories={[mockCategories[0]]}
        currentCategoryId="react-core"
        onSelectCategory={onSelect}
      />,
    )

    expect(screen.getByText(/React Core/)).toBeInTheDocument()
  })

  it('should update selected value when currentCategoryId changes', () => {
    const onSelect = vi.fn()
    const { container, rerender } = render(
      <CategorySelector
        categories={mockCategories}
        currentCategoryId="react-core"
        onSelectCategory={onSelect}
      />,
    )

    let select = container.querySelector('select') as HTMLSelectElement
    expect(select.value).toBe('react-core')

    rerender(
      <CategorySelector
        categories={mockCategories}
        currentCategoryId="js-fundamentals"
        onSelectCategory={onSelect}
      />,
    )

    select = container.querySelector('select') as HTMLSelectElement
    expect(select.value).toBe('js-fundamentals')
  })

  it('should render svg arrow icon', () => {
    const onSelect = vi.fn()
    const { container } = render(
      <CategorySelector
        categories={mockCategories}
        currentCategoryId="react-core"
        onSelectCategory={onSelect}
      />,
    )

    const svg = container.querySelector('svg')
    expect(svg).toBeInTheDocument()
    expect(svg).toHaveClass('h-4')
    expect(svg).toHaveClass('w-4')
  })

  it('should have pointer-events-none on icon container', () => {
    const onSelect = vi.fn()
    const { container } = render(
      <CategorySelector
        categories={mockCategories}
        currentCategoryId="react-core"
        onSelectCategory={onSelect}
      />,
    )

    const iconContainer = container.querySelector('.pointer-events-none')
    expect(iconContainer).toBeInTheDocument()
  })
})
