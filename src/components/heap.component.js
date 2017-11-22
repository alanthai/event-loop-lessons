// @flow

import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


// primitives only
function getTypeClass(v) {
  if (typeof v === 'string' && v[0] === '@') {
    if (v.slice(1) === 'undefined') {
      return 'gray';
    } else {
      return 'i dark-gray';
    }
  }
  if (typeof v === 'string') {
    return 'light-red';
  }
  if (v === null) {
    return 'gray';
  }
  return 'blue';
}

function formatValue(v) {
  if (typeof v !== 'string') {
    return '' + v;
  }

  if (v[0] === '@') {
    return v.slice(1);
  } else {
    return `"${v}"`;
  }
}

const Primitive = ({ name, value }) => (
  <div>
    <strong>{ name }:</strong>&nbsp;
    <ReactCSSTransitionGroup transitionName="flash" transitionEnterTimeout={300} transitionLeaveTimeout={1}>
      <code key={value} className={`f6 ${getTypeClass(value)}`}>{ formatValue(value) }</code>
    </ReactCSSTransitionGroup>
  </div>
);

const Obj = ({ name, value }) => (
  <div>
    <strong>{ name }:</strong>
    <ReactCSSTransitionGroup transitionName="flash" transitionEnterTimeout={300} transitionLeaveTimeout={1}>
      <pre><code>{ JSON.stringify(value, null, '  ') }</code></pre>
    </ReactCSSTransitionGroup>
  </div>
);

const isArrayOrObject = (v) =>
  (typeof v === 'object' && v !== null);

const Variable = (variable) => (
  isArrayOrObject(variable.value)
    ? Obj(variable)
    : Primitive(variable)
);

type VariablePair = [string, string];
interface HeapArgs {
  variablePairs: VariablePair[];
}

function sortAlphabeticallyByKey(pairs: VariablePair[]) {
  return pairs.slice().sort((a, b) => a[0].localeCompare(b[0]));
}

export const Heap = ({ variablePairs }: HeapArgs) => {
  return (
    <div className="heap b--heap-color b--solid bw1">
      <strong className="mb1 db bg-heap-color tc pa1 f4">Scope</strong>
      <ReactCSSTransitionGroup
        className="pa1 db"
        transitionName="flash"
        transitionEnterTimeout={300}
        transitionLeaveTimeout={300}>
        {sortAlphabeticallyByKey(variablePairs).map(([name, value]) =>
          <Variable key={name} name={name} value={value} />
        )}
      </ReactCSSTransitionGroup>
    </div>
  );
};
