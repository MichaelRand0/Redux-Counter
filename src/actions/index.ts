import { DECREMENT, INCREMENT } from "./actionTypes"

export const increment = (num:number) => {
  return {
    type: INCREMENT,
    payload: num
  }
}

export const decrement = () => {
  return {
    type: DECREMENT
  }
}