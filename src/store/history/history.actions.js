export const UNDO = 'history/UNDO';
export const REDO = 'history/REDO';
export const CLEAR_HISTORY = 'history/CLEAR';

export const undo = () => ({ type: UNDO });
export const redo = () => ({ type: REDO });
export const clearHistory = () => ({ type: CLEAR_HISTORY });
