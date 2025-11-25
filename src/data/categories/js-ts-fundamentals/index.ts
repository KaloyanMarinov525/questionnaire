import { createCategoryId } from '../../types'
import { abstract_class } from './abstract-class'
import { async_await } from './async-await'
import { call_stack_pop } from './call-stack-pop'
import { call_stack_push } from './call-stack-push'
import { callback_problems } from './callback-problems'
import { classKeyword } from './class'
import { design_patterns } from './design-patterns'
import { event_loop } from './event-loop'
import { event_loop_mechanism } from './event-loop-mechanism'
import { explain_callback } from './explain-callback'
import { explain_destructuring } from './explain-destructuring'
import { function_async_capability } from './function-async-capability'
import { function_hoisting } from './function-hoisting'
import { hoisting } from './hoisting'
import { interface_in_react } from './interface-in-react'
import { null_vs_undefined } from './null-vs-undefined'
import { promise } from './promise'
import { single_thread } from './single-thread'
import { try_catch_vs_promises } from './try-catch-vs-promises'
import { tuple } from './tuple'
import { type_in_react } from './type-in-react'
import { typescript_benefits } from './typescript-benefits'
import type { Category } from '../../types'

export const jsTypeScriptFundamentals: Category = {
  id: createCategoryId('js-ts-fundamentals'),
  name: 'JavaScript/TypeScript Fundamentals',
  description: 'Event loop, promises, types, design patterns',
  color: 'from-yellow-500 to-yellow-600',
  questions: [
    single_thread,
    call_stack_push,
    call_stack_pop,
    event_loop,
    event_loop_mechanism,
    explain_destructuring,
    classKeyword,
    abstract_class,
    design_patterns,
    typescript_benefits,
    interface_in_react,
    type_in_react,
    tuple,
    hoisting,
    function_hoisting,
    explain_callback,
    callback_problems,
    promise,
    async_await,
    function_async_capability,
    try_catch_vs_promises,
    null_vs_undefined,
  ],
}
