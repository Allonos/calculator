import React from 'react'
import { actions } from './App'

const OperationButton = ({ dispatch, operation }) => {
  return (
    <button className='digits' onClick={() =>
      dispatch({ type: actions.CHOOSE_OPERATION, payload: { operation } })
    }>
      {operation}
    </button>
  )
}

export default OperationButton;