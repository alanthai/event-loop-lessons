import React from 'react';


const Primitive = ({ name, value }) => (
  <div>
    <strong>{ name }:</strong> { value }
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

export const Heap = ({ variablePairs }) => {
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
