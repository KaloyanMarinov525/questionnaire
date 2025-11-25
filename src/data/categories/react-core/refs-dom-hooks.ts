import type { Question } from '../../types'

export const refs_dom_hooks: Question = {
  id: '56782ce4-8c6a-439e-b52b-6996d7eb663c',
  title: `What are Refs & DOM hooks: useRef, useLayoutEffect, useImperativeHandle`,
  answer: `● useRef: Stores a mutable value that persists across renders, often used for DOM access.
● useLayoutEffect: Runs synchronously after all DOM mutations, useful for measurements or DOM adjustments before painting.
● useImperativeHandle: Customizes the instance value exposed to parent components when using forwardRef.`,
  tags: ['useRef', 'DOM', 'Hooks'],
}
