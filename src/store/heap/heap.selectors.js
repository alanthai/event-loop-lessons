import { toPairs } from '../../utils/to-pairs';


export const variables = (state) => {
  const allVariables = state.heap.map(([, variables]) => variables);
  return Object.assign({}, ...allVariables);
}

export const variablePairs = (state) => toPairs(variables(state));
