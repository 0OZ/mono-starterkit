import { StackHandler } from '@stackframe/stack'

import { stackServerApp } from '@/lib/stack'

/**
 * The handler for the stack.
 * @param props The props to the handler.
 * @returns JSX.Element
 */
export default function Handler(props: unknown) {
  return <StackHandler fullPage app={stackServerApp} routeProps={props} />
}
