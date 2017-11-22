import React from 'react';
import { connect } from 'react-redux';

import * as CodeSnippetActions from '../store/code-snippet/code-snippet.actions';
import * as HeapActions from '../store/heap/heap.actions';
import * as LogsActions from '../store/logs/logs.actions';
import * as QueueActions from '../store/queue/queue.actions';
import * as StackActions from '../store/stack/stack.actions';
import * as WebApiActions from '../store/web-api/web-api.actions';
import * as LessonsActions from '../store/lessons/lessons.actions';
import * as LessonsSelectors from '../store/lessons/lessons.selectors';
import { combineActionDispatchers, combineSelectors } from '../store/utils';


export const StepComponent = connect(
  combineSelectors({ step: LessonsSelectors.stepNext }),
  combineActionDispatchers({
    highlightLines: CodeSnippetActions.highlightLines,
    pushScope: HeapActions.pushScope,
    popScopes: HeapActions.popScopes,
    setVariables: HeapActions.setVariables,
    removeVariables: HeapActions.removeVariables,
    pushStackFrames: StackActions.pushStackFrames,
    popStackFrames: StackActions.popStackFrames,
    enqueueMessage: QueueActions.enqueueMessage,
    dequeueMessage: QueueActions.dequeueMessage,
    addWebApi: WebApiActions.addWebApi,
    removeWebApi: WebApiActions.removeWebApi,
    setWebApiStatus: WebApiActions.setWebApiStatus,
    pushLog: LogsActions.pushLog,
    nextStep: LessonsActions.nextStep,
  })
)(({
  step,
  highlightLines,
  pushScope,
  popScopes,
  setVariables,
  removeVariables,
  pushStackFrames,
  popStackFrames,
  enqueueMessage,
  dequeueMessage,
  addWebApi,
  removeWebApi,
  setWebApiStatus,
  pushLog,
  nextStep,
}) => {
  function showNextStep() {
    if (!step) {
      return;
    }

    if (step.highlights) {
      highlightLines(step.highlights);
    }

    if (step.scopePush) {
      pushScope(step.scopePush);
    }

    if (step.scopePop) {
      popScopes(step.scopePop);
    }

    if (step.scopeSetVariables) {
      setVariables(step.scopeSetVariables);
    }

    if (step.scopeRemoveVariables) {
      removeVariables(step.scopeRemoveVariables);
    }

    if (step.stackPop) {
      popStackFrames(step.stackPop);
    }

    if (step.stackPush) {
      pushStackFrames(step.stackPush);
    }

    if (step.queueEnqueue) {
      enqueueMessage(step.queueEnqueue);
    }

    if (step.queueDequeue) {
      dequeueMessage();
    }

    if (step.webAdd) {
      addWebApi(step.webAdd);
    }

    if (step.webRemove) {
      removeWebApi(step.webRemove);
    }

    if (step.webSetStatus) {
      setWebApiStatus(step.webSetStatus);
    }

    if (step.log) {
      pushLog(step.log)
    }

    nextStep();
  }

  const btnColor = step ? 'bg-dark-gray' : 'bg-mid-gray';
  return (
    <button
      className={`f6 link ph3 pv2 dib white ${ btnColor }`}
      onClick={showNextStep}
      disabled={!step}>
      { step ? 'Next Step' : 'Completed' }
    </button>
  );
});
