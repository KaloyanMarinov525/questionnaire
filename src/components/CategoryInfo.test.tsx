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

  it('should have cyan colored category name span', () => {
    const { container } = render(
      <CategoryInfo categoryName="JavaScript" questionCount={30} />,
    )
    const categorySpan = container.querySelector('span.text-cyan-400')
    expect(categorySpan).toHaveClass('font-semibold')
    expect(categorySpan?.textContent).toBe('JavaScript')
  })

  it('should have semibold question count span', () => {
    const { container } = render(
      <CategoryInfo categoryName="React" questionCount={25} />,
    )
    const spans = container.querySelectorAll('span.font-semibold')
    const questionCountSpan = Array.from(spans).find((span) =>
      span.textContent.includes('25'),
    )
    expect(questionCountSpan).toBeInTheDocument()
  })

  it('should render bullet point between category and count', () => {
    const { container } = render(
      <CategoryInfo categoryName="TypeScript" questionCount={40} />,
    )
    expect(container.textContent).toContain('•')
  })

  it('should have proper background and border styling', () => {
    const { container } = render(
      <CategoryInfo categoryName="Test" questionCount={5} />,
    )
    const mainDiv = container.firstChild as HTMLElement
    expect(mainDiv).toHaveClass('bg-slate-800')
    expect(mainDiv).toHaveClass('border')
    expect(mainDiv).toHaveClass('border-slate-700')
    expect(mainDiv).toHaveClass('rounded-lg')
    expect(mainDiv).toHaveClass('p-6')
  })

  it('should display viewing text with category name and count together', () => {
    const { container } = render(
      <CategoryInfo categoryName="CSS" questionCount={20} />,
    )
    const text = container.textContent
    expect(text).toContain('Viewing')
    expect(text).toContain('CSS')
    expect(text).toContain('20')
    expect(text).toContain('questions')
  })

  it('should handle zero questions', () => {
    const { container } = render(
      <CategoryInfo categoryName="Empty" questionCount={0} />,
    )
    expect(container.textContent).toContain('0')
    expect(screen.getByText('Empty')).toBeInTheDocument()
  })

  it('should handle question count of 1', () => {
    render(<CategoryInfo categoryName="Single" questionCount={1} />)
    expect(screen.getByText('Single')).toBeInTheDocument()
    expect(screen.getByText('1')).toBeInTheDocument()
  })

  it('should render paragraph element with correct styling', () => {
    const { container } = render(
      <CategoryInfo categoryName="Test" questionCount={10} />,
    )
    const paragraph = container.querySelector('p')
    expect(paragraph).toBeInTheDocument()
    expect(paragraph).toHaveClass('text-slate-300')
  })

  it('should display all text content in correct order', () => {
    const { container } = render(
      <CategoryInfo categoryName="NodeJS" questionCount={35} />,
    )
    const text = container.textContent || ''
    const viewingIndex = text.indexOf('Viewing')
    const nodeIndex = text.indexOf('NodeJS')
    const bulletIndex = text.indexOf('•')
    const countIndex = text.indexOf('35')
    const questionsIndex = text.indexOf('questions')

    expect(viewingIndex).toBeLessThan(nodeIndex)
    expect(nodeIndex).toBeLessThan(bulletIndex)
    expect(bulletIndex).toBeLessThan(countIndex)
    expect(countIndex).toBeLessThan(questionsIndex)
  })
})
