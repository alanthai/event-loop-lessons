export const HIGHLIGHT_LINES = 'code-snippet/HIGHLIGHT_LINES';
export const SET_SNIPPET = 'code-snippet/SET_SNIPPET';

export const setSnippet = (snippet) => ({
  type: SET_SNIPPET,
  payload: snippet,
});

export const highlightLines = (lines) => ({
  type: HIGHLIGHT_LINES,
  payload: lines,
});
