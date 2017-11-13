// @flow

import type { WebApiId } from './web-api-id.type';
import type { WebApiStatus } from './web-api-status.type';


export interface WebApi {
  +id: WebApiId;
  +status: WebApiStatus;
  +content: string;
}
