import React from 'react'
import {useState} from "react"

function State()
{const [state, setstate] = useState("initialState");
let change =(event)=>{
  const val=event.target.value
  setstate(val)
}
return (
  <div >
  <input placeholder='type something' type={Text} onChange={change}></input>
  <h2>{state}</h2>
  </div>
);
}
export default State