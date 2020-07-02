import { v4 as uuidv4 } from 'uuid';
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING } from '../actions/types';

const initialState = {
  items: [],
  loading: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ITEMS:
      return {
        ...state,
        items: action.payload,
        loading: false  // Sets loading back to false, this is where you could add in a spinner
      };
    case DELETE_ITEM:
      return {
        ...state, // spread operator (...) provides everything currently in the state
        items: state.items.filter(item => item._id !== action.payload) // access payload from itemActions.js via action.payload
      };
    case ADD_ITEM:
      return {
        ...state,
        items: [action.payload, ...state.items]
      };
    case ITEMS_LOADING:
      return {
        ...state,
        loading: true
      };

    default:
      return state;
  }
}