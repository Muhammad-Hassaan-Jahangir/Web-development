import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { increment, decrement, reset, incrementByAmount, incrementAsync } from '../features/counter/counterSlice'
function Counter() {
  const [amount, setAmount] = useState(0);
  const [loading, setLoading] = useState(false);
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  function handleIncrement() {
    dispatch(increment())
  }
  function handleDecrement() {
    dispatch(decrement())
  }
  function handleReset() {
    dispatch(reset())
  }
  function handleIncrementByAmount() {
    dispatch(incrementByAmount(amount))
  }
  async function handleAsyncIncrement() {
    setLoading(true);
    await dispatch(incrementAsync(amount));
    setLoading(false);
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-600 via-purple-500 to-pink-400 animate-gradient-x">
      <div className="bg-white/80 backdrop-blur-lg shadow-2xl rounded-3xl p-10 w-96 text-center border border-purple-200">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mb-8 drop-shadow-lg">Counter App</h1>

        <div className="flex items-center justify-center gap-6 mb-8">
          <button 
            onClick={handleDecrement} 
            className="px-6 py-3 bg-gradient-to-r from-red-400 to-red-600 text-white rounded-full shadow-lg hover:scale-110 hover:from-red-500 hover:to-red-700 transition-transform duration-200 focus:outline-none focus:ring-4 focus:ring-red-300"
          >
            <span className="text-2xl font-bold">-</span>
          </button>

          <div className="flex flex-col items-center">
            <span className="text-5xl font-bold text-purple-700 drop-shadow-xl">{count}</span>
            <span className="text-xs text-gray-500 mt-1">Current Value</span>
          </div>

          <button 
            onClick={handleIncrement} 
            className="px-6 py-3 bg-gradient-to-r from-green-400 to-green-600 text-white rounded-full shadow-lg hover:scale-110 hover:from-green-500 hover:to-green-700 transition-transform duration-200 focus:outline-none focus:ring-4 focus:ring-green-300"
          >
            <span className="text-2xl font-bold">+</span>
          </button>
        </div>

        <button 
          onClick={handleReset} 
          className="w-full px-5 py-3 mb-8 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white rounded-xl shadow-md hover:scale-105 hover:from-yellow-500 hover:to-yellow-700 transition-transform duration-200 focus:outline-none focus:ring-4 focus:ring-yellow-300"
        >
          <span className="font-semibold">Reset</span>
        </button>

        <div className="flex flex-col gap-4">
          <input 
            type="number" 
            placeholder="Enter Amount"
            onChange={e => setAmount(Number(e.target.value))}
            className="px-4 py-3 border-2 border-purple-300 rounded-xl focus:ring-4 focus:ring-indigo-400 outline-none text-lg text-purple-700 bg-white/70 shadow-sm transition-all duration-200"
          />
          <button 
            onClick={handleIncrementByAmount} 
            className="px-5 py-3 bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-xl shadow-md hover:scale-105 hover:from-blue-500 hover:to-blue-700 transition-transform duration-200 focus:outline-none focus:ring-4 focus:ring-blue-300 font-semibold"
          >
            Increase by Amount
          </button>
          <button
            onClick={handleAsyncIncrement}
            disabled={loading}
            className={`px-5 py-3 bg-gradient-to-r from-pink-400 to-indigo-500 text-white rounded-xl shadow-md hover:scale-105 transition-transform duration-200 focus:outline-none focus:ring-4 focus:ring-pink-300 font-semibold ${loading ? 'opacity-60 cursor-not-allowed' : ''}`}
          >
            {loading ? 'Increasing (Async)...' : 'Increase by Amount (Async)'}
          </button>
        </div>
      </div>
      <style>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 8s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}

export default Counter