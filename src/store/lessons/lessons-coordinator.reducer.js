import { NEXT_STEP, SET_LESSON } from './lessons.actions';
import * as CodeSnippetActions from '../../store/code-snippet/code-snippet.actions';
import * as HeapActions from '../../store/heap/heap.actions';
import * as LogsActions from '../../store/logs/logs.actions';
import * as QueueActions from '../../store/queue/queue.actions';
import * as StackActions from '../../store/stack/stack.actions';
import * as WebApiActions from '../../store/web-api/web-api.actions';

import { lessonStepReducer } from './lesson-step.reducer';


function* nextStepActions(step) {
  if (step.highlights) {
    yield CodeSnippetActions.highlightLines(step.highlights);
  }

  if (step.scopePush) {
    yield HeapActions.pushScope(step.scopePush);
  }

  if (step.scopePop) {
    yield HeapActions.popScopes(step.scopePop);
  }

  if (step.scopeSetVariables) {
    yield HeapActions.setVariables(step.scopeSetVariables);
  }

  if (step.scopeRemoveVariables) {
    yield HeapActions.removeVariables(step.scopeRemoveVariables);
  }

  if (step.stackPop) {
    yield StackActions.popStackFrames(step.stackPop);
  }

  if (step.stackPush) {
    yield StackActions.pushStackFrames(step.stackPush);
  }

  if (step.queueEnqueue) {
    yield QueueActions.enqueueMessage(step.queueEnqueue);
  }

  if (step.queueDequeue) {
    yield QueueActions.dequeueMessage();
  }

  if (step.webAdd) {
    yield WebApiActions.addWebApi(step.webAdd);
  }

  if (step.webRemove) {
    yield WebApiActions.removeWebApi(step.webRemove);
  }

  if (step.webSetStatus) {
    yield WebApiActions.setWebApiStatus(step.webSetStatus);
  }

  if (step.log) {
    yield LogsActions.pushLog(step.log);
  }
}

function nextActions(step) {
  const actions = [];

  for (const action of nextStepActions(step)) {
    actions.push(action);
  }

  return actions;
}

function nextStep(state, stepAction) {
  return nextActions(stepAction.payload).reduce((newState, action) => {
    return lessonStepReducer(newState, action);
  }, state);
}

export function lessonsCoordinatorReducer(state, action) {
  switch (action.type) {
    case SET_LESSON:
      return undefined;
    case NEXT_STEP:
      return nextStep(state, action);
    default:
      return state;
  }
}
