import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import type { ClassValue } from 'clsx'

export function cn(...inputs: Array<ClassValue>) {
  return twMerge(clsx(inputs))
}

export function parseSelectValue(value: string | number): number {
  if (typeof value === 'number') {
    return value
  }
  const parsed = parseInt(value, 10)
  return isNaN(parsed) ? 0 : parsed
}
