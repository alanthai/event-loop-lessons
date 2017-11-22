import React from 'react';
import { connect } from 'react-redux';

import './app.css';

import { combineSelectors } from './store/utils';
import * as HeapSelectors from './store/heap/heap.selectors';
import * as LogsSelectors from './store/logs/logs.selectors';
import * as LessonsSelectors from './store/lessons/lessons.selectors';
import * as QueueSelectors from './store/queue/queue.selectors';
import * as StackSelectors from './store/stack/stack.selectors';
import * as WebApiSelectors from './store/web-api/web-api.selectors';
import * as CodeSnippetSelectors from './store/code-snippet/code-snippet.selectors';

import { CallbackQueue } from './components/callback-queue.component';
import { CallStack } from './components/call-stack.component';
import { CodeSnippet } from './components/code-snippet.component';
import { Heap } from './components/heap.component';
import { Logs } from './components/logs.component';
import { Navigation } from './components/navigation.component';
import { StepComponent } from './components/step.component';
import { WebApi } from './components/web-api.component'


export const App = connect(
  combineSelectors({
    highlights: CodeSnippetSelectors.highlights,
    logs: LogsSelectors.logs,
    lessonCode: LessonsSelectors.lessonCode,
    lessonDescription: LessonsSelectors.lessonDescription,
    lessonTitle: LessonsSelectors.lessonTitle,
    stackFrames: StackSelectors.stackFrames,
    queueMessages: QueueSelectors.queueMessages,
    variablePairs: HeapSelectors.variablePairs,
    webApiItems: WebApiSelectors.webApiItems,
  })
)(({
  highlights,
  logs,
  lessonCode,
  lessonDescription,
  lessonTitle,
  stackFrames,
  queueMessages,
  variablePairs,
  webApiItems,
}) => (
  <div className="grid main-layout vh-100">
    <div className="light-silver bg-dark-gray flex items-end">
      <strong className="f4 pa2">Lessons</strong>
    </div>

    <header className="light-gray bg-near-black flex items-end justify-center">
      <h1 className="f3">Event Loop</h1>
    </header>

    <Navigation currentLesson={lessonTitle} />

    <article className="pa3">
      <section className="mb1">
        <div className="flex items-center">
          <strong className="f3 mr2">{ lessonTitle }</strong>
          <StepComponent />
        </div>
        <p>{ lessonDescription }</p>
      </section>

      <section className="mb3">
        <div className="grid lesson-layout">
          <CodeSnippet code={lessonCode} highlights={highlights} />
          <Heap variablePairs={variablePairs} />
          <CallStack stackFrames={stackFrames} />
          <WebApi webApiItems={webApiItems} />
          <CallbackQueue messages={queueMessages} />
        </div>
      </section>

      <section className="center w-100">
        <Logs logs={logs} />
      </section>
    </article>
  </div>
));
