import { storeType } from "."
import "./App.css"
import {useSelector, useDispatch} from 'react-redux'
import { decrement, increment } from "./actions"

function App() {
  const counter = useSelector((state:storeType) => state.counter)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <h1>Counter is: {counter}</h1>
      <button className='button' onClick={() => dispatch(decrement())}>-</button>
      <button className='button' onClick={() => dispatch(increment(5))}>+</button>
    </div>
  )
}

export default App