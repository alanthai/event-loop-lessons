import React from 'react';


const NoLogs = () => (
  <div className="gray i mt2">Press "Next Step" to continue</div>
);

const LogItems = ({ logs }) => (
  <div className="flex flex-column-reverse mt2">
    {
      logs.map((log, i) =>
        <div key={i}>◆ { log }</div>)
    }
  </div>
);

export const Logs = ({ logs }) => (
  <div>
    <strong className="f4">Description</strong>
    {
      !!logs.length ? <LogItems logs={logs} /> : <NoLogs />
    }
  </div> 
);
