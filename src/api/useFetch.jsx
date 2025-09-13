import { useEffect, useState } from "react"



const useFetch = (url, method) => {
    const [data, setData]= useState(null);
    const token = localStorage.getItem("token")
    console.log(token, "token from local storage")
    const fetchData = async()=> {
        const response =await fetch(url, 
            { 
            headers: {
            accept: "application/json",
            "content-type" : "application/json",
            Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMjJlMjQ2MjEwY2M5YmYyZDVjYWUwNjE2OTJkZDIwYyIsIm5iZiI6MTc1NTcxMTkzMy43MTI5OTk4LCJzdWIiOiI2OGE2MDliZGJjMmVhNWIwNmZkNTUwMDEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.wosw5BpKEa63U6OUBBzjkLypb0mfH1zEZXDwq3oRFx4"
          }})
          const result =  await response.json();
          if(response.ok){
            setData(result.results)
          } else{
            console.log("Error fetching data", result)
          }
    }

    useEffect(()=>{
        fetchData();
    },[url])


    return data;
}

export default useFetch;