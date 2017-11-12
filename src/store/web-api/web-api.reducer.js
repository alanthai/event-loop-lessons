import {
  ADD_WEB_API,
  REMOVE_WEB_API,
  SET_WEB_API_STATUS,
} from './web-api.actions';


/*
interface WebApiItem {
  id: string;
  content: string;
}

interface WebApiState {
  items: WebApiItem[];
}
*/

const INITIAL_STATE = {
  items: [],
};

export function webApiReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_WEB_API:
      return { ...state, items: state.items.concat(action.payload) };
    case REMOVE_WEB_API:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload)
      };
    case SET_WEB_API_STATUS:
      return {
        ...state,
        items: state.items.map(item => {
          return item.id === action.payload.id
            ? { ...item, status: action.payload.status }
            : item;
        })
      };
    default:
      return state;
  }
}
