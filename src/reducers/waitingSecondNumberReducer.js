import { ON_WAITING_SECOND_NUMBER, OFF_WAITING_SECOND_NUMBER } from '../actions/types';

export default (state = false, action) => {
  switch(action.type) {
    case ON_WAITING_SECOND_NUMBER:
      return true;
    case OFF_WAITING_SECOND_NUMBER:
      return false;
    default:
      return state;
  }
}
