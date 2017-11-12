export const PUSH_STACK_ITEMS = 'stack/PUSH_STACK_ITEMS';
export const POP_STACK_ITEMS = 'stack/POP_STACK_ITEMS';

export const pushStackItems = (item) => ({
  type: PUSH_STACK_ITEMS,
  payload: item,
});

export const popStackItems = (amount) => ({
  type: POP_STACK_ITEMS,
  payload: amount,
});
