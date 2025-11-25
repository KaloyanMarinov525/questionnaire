import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CategoryInfo } from './CategoryInfo'

describe('CategoryInfo', () => {
  it('should render category name', () => {
    render(<CategoryInfo categoryName="React Core" questionCount={10} />)
    expect(screen.getByText('React Core')).toBeInTheDocument()
  })

  it('should render question count', () => {
    render(<CategoryInfo categoryName="React Core" questionCount={25} />)
    expect(screen.getByText('25')).toBeInTheDocument()
  })

  it('should display "Viewing" text with category name', () => {
    const { container } = render(
      <CategoryInfo categoryName="JavaScript" questionCount={15} />,
    )
    expect(container.textContent).toContain('Viewing')
    expect(container.textContent).toContain('JavaScript')
  })

  it('should render with single question', () => {
    const { container } = render(
      <CategoryInfo categoryName="Test" questionCount={1} />,
    )
    expect(container.textContent).toContain('1')
    expect(container.textContent).toContain('questions')
  })

  it('should render with many questions', () => {
    const { container } = render(
      <CategoryInfo categoryName="Advanced Topics" questionCount={100} />,
    )
    expect(container.textContent).toContain('100')
    expect(screen.getByText('Advanced Topics')).toBeInTheDocument()
  })

  it('should render with special characters in name', () => {
    const { container } = render(
      <CategoryInfo categoryName="C++ & TypeScript" questionCount={42} />,
    )
    expect(screen.getByText('C++ & TypeScript')).toBeInTheDocument()
    expect(container.textContent).toContain('42')
  })

  it('should render with long category name', () => {
    const longName = 'Very Long Category Name That Might Wrap'
    render(<CategoryInfo categoryName={longName} questionCount={5} />)
    expect(screen.getByText(longName)).toBeInTheDocument()
  })

  it('should have proper styling classes', () => {
    const { container } = render(
      <CategoryInfo categoryName="Test" questionCount={10} />,
    )
    const mainDiv = container.firstChild as HTMLElement
    expect(mainDiv).toHaveClass('bg-slate-800')
    expect(mainDiv).toHaveClass('rounded-lg')
    expect(mainDiv).toHaveClass('border')
  })

  it('should display cyan colored category name', () => {
    const { container } = render(
      <CategoryInfo categoryName="React Core" questionCount={20} />,
    )
    const categorySpan = container.querySelector('span.text-cyan-400')
    expect(categorySpan).toBeInTheDocument()
    expect(categorySpan?.textContent).toBe('React Core')
  })

  it('should display semibold category and count', () => {
    const { container } = render(
      <CategoryInfo categoryName="Test" questionCount={15} />,
    )
    const spans = container.querySelectorAll('span.font-semibold')
    expect(spans.length).toBeGreaterThan(0)
  })
})
