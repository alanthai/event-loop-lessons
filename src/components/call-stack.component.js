import React from 'react';


const StackFrame = ({ item }) => (
  <div className="bg-stack-color bw1 pa1 mb1 dark-gray">
    { item.content }
  </div>
);

export const CallStack = ({ stackFrames }) => (
  <div className="stack b--stack-color b--solid bw1">
    <strong className="mb1 db bg-stack-color tc pa1 f4">
      Call Stack
    </strong>
    <div className="flex flex-column-reverse ma1">
      {
        stackFrames.map((item, i) =>
          <StackFrame key={i} item={item} />
        )
      }
    </div>
  </div>
);
