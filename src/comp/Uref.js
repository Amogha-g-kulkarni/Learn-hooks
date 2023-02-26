import React,{useRef} from 'react'



const Uref = () => {
    const inputRef=useRef("")
  return (
    <div>
        <input placeholder='Write Something' ref={inputRef}></input>
        <button onClick={()=>{
        console.log(inputRef.current.value)
            }
            }>click</button>
    </div>
  )
}

export default Uref