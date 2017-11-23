import React from 'react';


const NoLogs = () => (
  <div className="gray i mt2">Press "Next Step" to continue</div>
);

const LogItems = ({ logs }) => (
  <div className="flex flex-column-reverse mt2">
    {logs.map((log, i) => {
      const last = i === logs.length - 1;
      return (<div key={i} className={last ? 'near-black' : 'mid-gray'}>
        ‣ { log }
      </div>);
    })}
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
