import React from 'react';


export const Logs = ({ logs }) => (
  <div>
    <strong className="f4">Description</strong>
    <div className="flex flex-column-reverse mt2">
      {
        logs.map((log, i) =>
          <div key={i}>◆ { log }</div>)
      }
    </div>
  </div> 
);
