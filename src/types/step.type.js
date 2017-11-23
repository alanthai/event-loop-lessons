// @flow

import { StackFrame } from './stack-frame.type';
import type { WebApiId } from './web-api-id.type';
import type { WebApiStatus } from './web-api-status.type';
import { WebApi } from './web-api.type';
import { QueueItem } from './queue-item.type';

// optional = unchanged from before
export interface Step {
  +highlights?: number[];
  +heap?: any;
  +scopePush: [string, any];
  +scopePop: number;
  +scopeSetVariables?: any;
  +scopeRemoveVariables?: string[];
  +stackPop?: number;
  +stackPush?: StackFrame[];
  +queueEnqueue?: QueueItem[];
  +queueDequeue?: boolean;
  +webAdd?: WebApi[];
  +webRemove?: WebApiId;
  +webSetStatus?: WebApiStatus;
  +log: string; // describe what happend
}
