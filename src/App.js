import { useEffect, useState } from "react";

  // function useTimer(interval){
  //   const [seconds, setSeconds] = useState(0) ;

  //   useEffect(
  //     () => {
  //       const timer = setInterval(() => {
  //         setSeconds((prevValue) => prevValue +1)
  //       }, interval);
  //       return () => clearInterval(timer);
  //     },
  //     [interval]
  //   )
  //   return seconds;
  // }

  // function TimerComponent(){
  //   const seconds = useTimer(1000);
  //   return <div>Прошло секунд: {seconds}</div>
  // }

  function useEffect(url){
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, seterror] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
        try{
          const response = await fetch(url);
          const result = await response.json();
          setData(result);
        }catch(error){
          setError(error);
        }finally{
          setLoading(false);
        }
      }
    },[url])
    return {data, loading, error}
  }

  function DataComponent(){
    const {data, loading, error} = useEffect('https://jsonplaseholder.typicode.com/posts');
  }

function App() {
  return (
    // <TimerComponent/>
    
  )
}

export default App;
