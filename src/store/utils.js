export function combineActionDispatchers(fnMap) {
  return dispatch => {
    return Object.keys(fnMap)
      .reduce((map, key) => {
        const fn = fnMap[key];
        map[key] = (...args) => dispatch(fn(...args));
        return map;
      }, {});
  }
}

export function combineSelectors(selectorMap) {
  return state => {
    return Object.keys(selectorMap)
      .reduce((map, key) => {
        const selector = selectorMap[key];
        map[key] = selector(state);
        return map;
      }, {});
  }
}

export function pipeReducers(...reducers) {
  return (state, action) => (
    reducers
      .reduce((oldState, reducer) => reducer(oldState, action), state)
  );
}
