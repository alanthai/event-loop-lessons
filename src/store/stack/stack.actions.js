// @flow

import { StackFrame } from '../../types';


export const PUSH_STACK_ITEMS = 'stack/PUSH_STACK_ITEMS';
export const POP_STACK_ITEMS = 'stack/POP_STACK_ITEMS';

export const pushStackFrames = (items: StackFrame[]) => ({
  type: PUSH_STACK_ITEMS,
  payload: items,
});

export const popStackFrames = (amount: number) => ({
  type: POP_STACK_ITEMS,
  payload: amount,
});
