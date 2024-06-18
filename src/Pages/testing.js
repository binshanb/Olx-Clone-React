import React from 'react'
import Child from './Child'

const testing = () => {
    const [data,setData] = useState("");
    const dataFromChild =(data)=>
       setData(data)    
  return (
    <div> 
       <p> Data:{dataFromChild}</p>
       <Child sendData={dataFromChild}/>
    </div>
  )
}

export default testing