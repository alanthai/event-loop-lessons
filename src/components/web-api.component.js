import React from 'react';


const WebApiItem = ({ item }) => (
  <div className="flex flex-column b--webapi-color b--solid bw1 pa1 mb1 dark-gray">
    <span>{ item.content }</span>
    <span>{ item.status }</span>
  </div>
);

export const WebApi = ({ webApiItems }) => (
  <div className="webapi b--webapi-color b--solid bw1">
    <strong className="mb1 db bg-webapi-color tc pa1 f4">Web API</strong>
    <div className="flex flex-column ma1">
      {
        webApiItems.map((item) =>
          <WebApiItem key={item.id} item={item} />
        )
      }
    </div>
  </div>
);
