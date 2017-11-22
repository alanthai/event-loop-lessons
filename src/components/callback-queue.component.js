import React from 'react'

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


const QueueItem = ({ item }) => (
  <div className="bg-queue-color bw1 pa1 mr1 dark-gray">
    { item.message }
  </div>
);
  
export const CallbackQueue = ({ messages }) => (
  <div className="queue b--queue-color b--solid bw1">
    <strong className="db bg-queue-color pa1 f4">Callback Queue</strong>
    <ReactCSSTransitionGroup
      className="flex ma1"
      transitionName={{
        enter: 'item-h-enter',
        leave: 'item-h-neg-leave',
      }}
      transitionEnterTimeout={300}
      transitionLeaveTimeout={300}>
      {messages.map((item) =>
        <QueueItem key={item.id || item.message} item={item} />
      )}
    </ReactCSSTransitionGroup>
  </div>
);
