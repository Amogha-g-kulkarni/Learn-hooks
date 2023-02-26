import React from 'react'
import { useReducer } from 'react'

const reducer=(state,action)=>{
    switch(action.type){
        case "INCREMENT" :{return{count:state.count++,showText:state.showText}}
        case "toggleText":{return{count:state.count,showText:!state.showText}}
         default:return state
    }
}

const Reduc = () => {
    const [state,dispatch]=useReducer(reducer,{count:0,showText:true})
  return (
    <div>
        {state.count}
        <br/>
      <button
      onClick={()=>{
        dispatch({type:"INCREMENT"});
        dispatch({type:"toggleText"})
      }}
      >click</button>
        {state.showText&&<a>text</a>}
    </div>
  )
}

export default Reduc