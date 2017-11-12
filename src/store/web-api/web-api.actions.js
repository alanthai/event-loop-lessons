export const ADD_WEB_API = 'web-api/ADD_WEB_API';
export const REMOVE_WEB_API = 'web-api/REMOVE_WEB_API';
export const SET_WEB_API_STATUS = 'web-api/SET_WEB_API_STATUS';

export const addWebApi = (api) => ({
  type: ADD_WEB_API,
  payload: api,
});

export const removeWebApi = (id) => ({
  type: REMOVE_WEB_API,
  payload: id,
});


/*
interface WebApiStatusChange {
  id: WebApiId;
  status: WebApiStatus;
}
@param {WebApiStatusChange} statusChange
*/
export const setWebApiStatus = (statusChange) => ({
  type: SET_WEB_API_STATUS,
  payload: statusChange,
});
