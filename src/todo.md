# TODO

- Add side nav for different lessons
- lessons:
  - scope
  - hoisting
  - observables
- Add flow / typings
- Explore YAML for lessons instead of JSON
- Allow any types incompatible with JSON/YAML (eg, undefined, functions)
- Improve styles
  - Switch from CSS styles to JS styles
  - Improve theme
  - Add icons for WebApi statuses


## Types

```ts
interface QueueMessage {
  readonly message: string;
}

enum WebApiStatus {
  None,
  Waiting,
  Done,
  Error,
}

type WebApiId = string;

interface WebApiItem {
  readonly id: WebApiId;
  readonly content: string;
  readonly status: WebApiStatus;
}

interface WebApiStatusChange {
  readonly id: WebApiId;
  readonly status: WebApiStatus;
}

/* optional = unchanged from before */
interface Step {
  readonly highlights?: number[];
  readonly heap?: any;
  readonly 'stack.pop'?: number;
  readonly 'stack.push'?: {};
  readonly 'queue.enqueue'?: {};
  readonly 'queue.dequeue'?: boolean;
  readonly 'web.add?': {}[];
  readonly 'web.remove'?: WebApiId;
  readonly 'web.setStatus'?: WebApiStatusChange;
  readonly log: string; // describe what happend
}
```
