// useEffect 
// WHat is useEffect?
// useEffect is a hook that allows you to perform side effects in function components.

import { useState } from "react";
import { useEffect } from "react";



const TestHooks  = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(2);
  const [postData, setPostData] = useState([]);


  const handleApi = async() => {
    const url =await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await url.json();
    setPostData(data)
    console.log(data ,"data")
  }

  console.log(postData, "postData")
  

  
  // useEffect(()=> {
  //   console.log("mounting")
    
  // },[])

  // useEffect(()=>{
  // console.log("count mounting" + count)
  
  // },[count])

  // useEffect(()=>{
  //   console.log("count mounting" + count)
  // },[count2])
  useEffect(()=>{
    console.log("without dependency array");
    handleApi();
  },[])
  // life 1) mounting, 2)updating, 3unmounting
  
  return (
    <div>
      <h1>TestHooks</h1>
      <button onClick={()=>setCount(count +1)}>click</button>


      <button onClick={()=>setCount2(count2 +1)}>click button 2</button>
      {
        postData.map((item)=> {
         return(
          <h4>{item.title}</h4>
         )
        })
      }
    </div>
  )
}

export default TestHooks;