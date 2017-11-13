// @flow

import { Step } from './step.type';


export interface Lesson {
  +title: string;
  +description: string;
  +code: string[];
  +steps: Step[];
}
