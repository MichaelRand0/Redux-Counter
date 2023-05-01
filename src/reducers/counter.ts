import { DECREMENT, INCREMENT } from "../actions/actionTypes";
import { actionType } from "../typings";

const counterReducer = (state = 0, action:actionType) => {
  switch(action.type) {
    case INCREMENT:
      return state + action.payload
    case DECREMENT:
      return state - 1
    default:
      return state
  }
}

export default counterReducer