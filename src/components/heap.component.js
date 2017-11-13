// @flow

import React from 'react';


// primitives only
function getTypeClass(v) {
  if (typeof v === 'string' && v[0] === '@') {
    if (v.slice(1) === 'function') {
      return 'i dark-gray';
    } else if (v.slice(1) === 'undefined') {
      return 'gray';
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
    <code className={'f6 ' + getTypeClass(value)}>{ formatValue(value) }</code>
  </div>
);

const Obj = ({ name, value }) => (
  <div>
    <strong>{ name }:</strong>
    <pre><code>{ JSON.stringify(value, null, '  ') }</code></pre>
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

export const Heap = ({ variablePairs }: HeapArgs) => {
  return (
    <div className="heap b--heap-color b--solid bw1">
      <strong className="mb1 db bg-heap-color tc pa1 f4">Scope</strong>
      <div className="pa1">
        {
          variablePairs.map(([name, value]) =>
            <Variable key={name} name={name} value={value} />)
        }
      </div>
    </div>
  );
};
