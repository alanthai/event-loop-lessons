export const codeSnippet = (state) => state.present.codeSnippet;
export const snippet = (state) => codeSnippet(state).snippet;
export const highlights = (state) => codeSnippet(state).highlights;
