import React from 'react';
import { connect } from 'react-redux';

import './app.css';

import { combineSelectors } from './store/utils';
import * as HeapSelectors from './store/heap/heap.selectors';
import * as StackSelectors from './store/stack/stack.selectors';
import * as QueueSelectors from './store/queue/queue.selectors';
import * as WebApiSelectors from './store/web-api/web-api.selectors';
import * as LogsSelectors from './store/logs/logs.selectors';

import { CallStack } from './components/call-stack.component';
import { Heap } from './components/heap.component';
import { Logs } from './components/logs.component';
import { CallbackQueue } from './components/callback-queue.component';
import { StepComponent } from './components/step.component';
import { WebApi } from './components/web-api.component'
import { CodeSnippet } from './components/code-snippet.component';


export const App = connect(
  combineSelectors({
    logs: LogsSelectors.logs,
    stackItems: StackSelectors.stackItems,
    queueMessages: QueueSelectors.queueMessages,
    variablePairs: HeapSelectors.variablePairs,
    webApiItems: WebApiSelectors.webApiItems,
  })
)(({
  logs,
  stackItems,
  queueMessages,
  variablePairs,
  webApiItems,
}) => (
  <div className="flex flex-column">
    <header className="App-header tc mb2">
      <h1 className="App-title">Event Loop Lessons</h1>
    </header>

    <section className="mb1">
      <div>
        <strong className="f3 mr2">Introduction</strong>
        <StepComponent />
      </div>
      <p>
      JavaScript runs asynchronously through an event loop. Let's look at a simple example
      </p>
    </section>

    <section className="mb3">
      <div className="grid grid-layout">
        <CodeSnippet />
        <Heap variablePairs={variablePairs} />
        <CallStack stackItems={stackItems} />
        <WebApi webApiItems={webApiItems} />
        <CallbackQueue messages={queueMessages} />
      </div>
    </section>

    <section className="center w-100">
      <Logs logs={logs} />
    </section>
  </div>
));
