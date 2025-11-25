import { single_thread } from './single-thread'
import { call_stack_push } from './call-stack-push'
import { call_stack_pop } from './call-stack-pop'
import { event_loop } from './event-loop'
import { event_loop_mechanism } from './event-loop-mechanism'
import { explain_destructuring } from './explain-destructuring'
import { classKeyword } from './class'
import { abstract_class } from './abstract-class'
import { design_patterns } from './design-patterns'
import { typescript_benefits } from './typescript-benefits'
import { interface_in_react } from './interface-in-react'
import { type_in_react } from './type-in-react'
import { tuple } from './tuple'
import { hoisting } from './hoisting'
import { function_hoisting } from './function-hoisting'
import { explain_callback } from './explain-callback'
import { callback_problems } from './callback-problems'
import { promise } from './promise'
import { async_await } from './async-await'
import { function_async_capability } from './function-async-capability'
import { try_catch_vs_promises } from './try-catch-vs-promises'
import { null_vs_undefined } from './null-vs-undefined'
import type { Category } from '../../types'

export const jsTypeScriptFundamentals: Category = {
  id: 'js-ts-fundamentals',
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
