import React from 'react';
import { connect } from 'react-redux';

import * as CodeSnippetActions from '../store/code-snippet/code-snippet.actions';
import * as HeapActions from '../store/heap/heap.actions';
import * as LogsActions from '../store/logs/logs.actions';
import * as QueueActions from '../store/queue/queue.actions';
import * as StackActions from '../store/stack/stack.actions';
import * as WebApiActions from '../store/web-api/web-api.actions';
import { combineActionDispatchers } from '../store/utils';
import lesson from '../lessons/intro.json';


export const StepComponent = connect(
  undefined,
  combineActionDispatchers({
    highlightLines: CodeSnippetActions.highlightLines,
    pushScope: HeapActions.pushScope,
    popScopes: HeapActions.popScopes,
    setVariables: HeapActions.setVariables,
    removeVariables: HeapActions.removeVariables,
    pushStackItems: StackActions.pushStackItems,
    popStackItems: StackActions.popStackItems,
    enqueueMessage: QueueActions.enqueueMessage,
    dequeueMessage: QueueActions.dequeueMessage,
    addWebApi: WebApiActions.addWebApi,
    removeWebApi: WebApiActions.removeWebApi,
    setWebApiStatus: WebApiActions.setWebApiStatus,
    pushLog: LogsActions.pushLog,
  })
)(({
  highlightLines,
  pushScope,
  popScopes,
  setVariables,
  removeVariables,
  pushStackItems,
  popStackItems,
  enqueueMessage,
  dequeueMessage,
  addWebApi,
  removeWebApi,
  setWebApiStatus,
  pushLog,
}) => {

  function nextStep(step: Step) {
    if (!step) {
      return;
    }

    if (step.highlights) {
      highlightLines(step.highlights);
    }

    if (step['scope.push']) {
      pushScope(step['scope.push']);
    }

    if (step['scope.pop']) {
      popScopes(step['scope.pop']);
    }

    if (step['scope.setVariables']) {
      setVariables(step['scope.setVariables']);
    }

    if (step['scope.removeVariables']) {
      removeVariables(step['scope.removeVariables']);
    }

    if (step['stack.pop']) {
      popStackItems(step['stack.pop']);
    }

    if (step['stack.push']) {
      pushStackItems(step['stack.push']);
    }

    if (step['queue.enqueue']) {
      enqueueMessage(step['queue.enqueue']);
    }

    if (step['queue.dequeue']) {
      dequeueMessage();
    }

    if (step['web.add']) {
      addWebApi(step['web.add']);
    }

    if (step['web.remove']) {
      removeWebApi(step['web.remove']);
    }

    if (step['web.setStatus']) {
      setWebApiStatus(step['web.setStatus']);
    }

    if (step.log) {
      pushLog(step.log)
    }
  }
  let i = 0;

  return (
    <button onClick={() => nextStep(lesson.steps[i++])}>
      Next Step
    </button>
  );
});
