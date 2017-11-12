export const PUSH_LOG = 'log/PUSH_LOG';

export const pushLog = (log) => ({
  type: PUSH_LOG,
  payload: log,
});
