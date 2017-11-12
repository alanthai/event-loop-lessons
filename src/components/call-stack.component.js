import React from 'react';


const StackItem = ({ item }) => (
  <div className="bg-stack-color bw1 pa1 mb1 dark-gray">
    { item.content }
  </div>
);

export const CallStack = ({ stackItems }) => (
  <div className="stack b--stack-color b--solid bw1">
    <strong className="mb1 db bg-stack-color tc pa1 f4">
      Call Stack
    </strong>
    <div className="flex flex-column-reverse ma1">
      {
        stackItems.map((item, i) =>
          <StackItem key={i} item={item} />
        )
      }
    </div>
  </div>
);
