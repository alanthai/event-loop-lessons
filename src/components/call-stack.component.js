import React from 'react';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


const StackFrame = ({ item }) => (
  <div className="bg-stack-color bw1 pa1 mb1 dark-gray">
    { item.content }
  </div>
);

export const CallStack = ({ stackFrames }) => (
  <div className="stack b--stack-color b--solid flex flex-column bw1">
    <strong className="mb1 db bg-stack-color tc pa1 f4">
      Call Stack
    </strong>
    <ReactCSSTransitionGroup
      className="flex flex-column-reverse flex-auto ma1"
      transitionName="item-v-neg"
      transitionEnterTimeout={300}
      transitionLeaveTimeout={300}>
      {stackFrames.map((item, i) =>
        <StackFrame key={i} item={item} />
      )}
    </ReactCSSTransitionGroup>
  </div>
);
