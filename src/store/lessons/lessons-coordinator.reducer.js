import { SET_LESSON } from './lessons.actions';

export function lessonsCoordinatorReducer(state, action) {
  switch (action.type) {
    case SET_LESSON:
      return undefined;
    default:
      return state;
  }
}
