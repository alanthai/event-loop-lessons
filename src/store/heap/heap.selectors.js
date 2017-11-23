import { toPairs } from '../../utils/to-pairs';


export const heap = (state) => state.heap;

export const variables = (state) => {
  const allVariables = heap(state).map(([, variables]) => variables);
  return Object.assign({}, ...allVariables);
};

export const variablePairs = (state) => toPairs(variables(state));
