import React from 'react'


const QueueItem = ({ item }) => (
  <div className="bg-queue-color bw1 pa1 mr1 dark-gray">
    { item.message }
  </div>
);
  
export const CallbackQueue = ({ messages }) => (
  <div className="queue b--queue-color b--solid bw1">
    <strong className="db bg-queue-color pa1 f4">Callback Queue</strong>
    <div className="flex ma1">
      {
        messages.map((item, i) =>
          <QueueItem key={i} item={item} />
        )
      }
    </div>
  </div>
);
