import React from 'react';
import { connect } from 'react-redux';

import * as LessonsActions from '../store/lessons/lessons.actions';
import * as LessonsSelectors from '../store/lessons/lessons.selectors';
import * as HistoryActions from '../store/history/history.actions';
import * as HistorySelectors from '../store/history/history.selectors';
import { combineSelectors } from '../store/utils';


const buttonBase = 'f6 link ph3 pv2 dib white';
const enabledButton = `${buttonBase} bg-dark-gray`;
const disabledButton = `${buttonBase} bg-mid-gray`;

const PreviousButton = ({ past, previousStep }) => {
  const prevEnabled = !!past.length;
  if (!prevEnabled) {
    return <button className={disabledButton} disabled={true}>At Start</button>;
  }
  return <button className={enabledButton} onClick={previousStep}>Previous Step</button>;
};

const NextButton = ({ step, nextStep }) => {
  const nextEnabled = !!step;
  if (!nextEnabled) {
    return <button className={disabledButton} disabled={true}>Completed</button>;
  }
  return <button className={enabledButton} onClick={nextStep}>Next Step</button>;
};

export const StepComponent = connect(
  combineSelectors({ step: LessonsSelectors.stepNext, past: HistorySelectors.past }),
  { nextStep: LessonsActions.nextStep, previousStep: HistoryActions.undo }
)(({
  step,
  nextStep,
  past,
  previousStep,
}) => {
  return (
    <step-component>
      <PreviousButton past={past} previousStep={previousStep} />
      <NextButton step={step} nextStep={() => nextStep(step)} />
    </step-component>
  );
});
