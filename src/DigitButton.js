import React from 'react'
import { actions } from './App'

const DigitButton = ({ dispatch, digit }) => {
  return (
    <button className='digits' onClick={() => dispatch({ type: actions.ADD_DIGIT, payload: { digit } })}>
      {digit}
    </button>
  )
}

export default DigitButton