import axios from "axios"
import React,{useEffect,useState} from 'react'

const Eff = () => {

    const [state, setstate] = useState("");
    const [count, setCount] = useState(0);
    useEffect(() => {

        axios
        .get("https://jsonplaceholder.typicode.com/comments")
        .then((res)=>{
            console.log("api called")
            setstate(res.data[0].email)})
        
    },[count]);
const change=()=>{
    setCount(count+1)
}
  return (
    <div>{state}
    <button onClick={change}>{count}</button>
    </div>
  )
}

export default Eff