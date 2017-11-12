import {
  HIGHLIGHT_LINES,
  SET_SNIPPET,
} from './code-snippet.actions';
import lesson from '../../lessons/intro.json';


/*
interface CodeSnippetState {
  snippet: string;
  highlights: (number | [number, number])[];
}
*/

const INITIAL_STATE = {
  snippet: lesson.code.join('\n'),
  highlights: [],
};

export function codeSnippetReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case HIGHLIGHT_LINES:
      return { ...state, highlights: action.payload };
    case SET_SNIPPET:
      return { ...state, snippet: action.payload };
    default:
      return state;
  }
}
