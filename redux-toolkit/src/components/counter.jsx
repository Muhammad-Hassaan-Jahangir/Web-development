import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { increment,decrement,reset, incrementByAmount } from '../features/counter/counterSlice'
function Counter() {
  const [amount,setAmount] = useState(0);
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  function handleincrement() {
     dispatch(increment())
  }
  function handledecrement() {
     dispatch(decrement())
  }
  function handleReset() {
     dispatch(reset())
  }
  function handleincrementByAmount() {
     dispatch(incrementByAmount(amount))
  }

  return (
    <div className='container'>
      <button onClick={handleincrement}>+</button>
      <h1>Count: {count}</h1>
      <button onClick={handledecrement}>-</button>
      <br />
      <button onClick={handleReset}>Reset</button>
      <br />
      <input type="number" placeholder='Enter Amount' onChange={e => setAmount(Number(e.target.value))} />
      <button onClick={handleincrementByAmount}>Inc by Amount</button>
    </div>
  )
}

export default Counter