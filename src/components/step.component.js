import React from 'react';
import { connect } from 'react-redux';

import * as LessonsActions from '../store/lessons/lessons.actions';
import * as LessonsSelectors from '../store/lessons/lessons.selectors';
import { combineSelectors } from '../store/utils';


export const StepComponent = connect(
  combineSelectors({ step: LessonsSelectors.stepNext }),
  { nextStep: LessonsActions.nextStep }
)(({
  step,
  nextStep,
}) => {
  const btnColor = step ? 'bg-dark-gray' : 'bg-mid-gray';
  return (
    <button
      className={`f6 link ph3 pv2 dib white ${ btnColor }`}
      onClick={() => !!step && nextStep(step)}
      disabled={!step}>
      { step ? 'Next Step' : 'Completed' }
    </button>
  );
});
