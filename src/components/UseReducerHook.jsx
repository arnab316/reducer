import React from 'react'
import { useReducer } from 'react';

function UseReducerHook() {
    const reducer = (state, action)=>{
      if(action.type === 'INC'){
        return state + 1;
        }
      if(action.type === 'DEC'){
        let newNum = 0;
        state > 0? (newNum = state - 1): (newNum =0);
        return newNum;
  }
  return state;
}
    const initialvalue =0;
    const [count, dispatch] = useReducer(reducer,initialvalue);    
  return (
    <div>
      <button onClick={()=>{dispatch({type:'INC'})}}>+</button>
      <h1>{count}</h1>
      <button onClick={()=>{dispatch({type:'DEC'})}}>-</button>
    </div>
  );
};

export default UseReducerHook;
