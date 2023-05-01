import { actionType } from "../typings";

const authReducer = (state = 0, action:actionType) => {
  switch(action.type) {
    case 'SIGN IN':
      return true
    case 'SIGN OUT':
      return false
    default:
      return false
  }
}

export default authReducer