import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("a");

  const clickHandler = () => {
    setCount(count + 1);
  };

  ////////////////////use effect without second argumnet////////

  // useEffect(()=>{
  //   console.log('avin');

  // })

  /////////use effect with a second argumnet which is an empty array////////

  // useEffect(()=>{
  //   console.log('avin');

  // } , [])

  //////////////use effect with a second argumnet which shows a state////////

  // useEffect(()=>{
  //   console.log('avin');

  // } , [count])

  ////////use effect with a second argumnet which shows another state////////

  // useEffect(()=>{
  //   console.log('avin');

  // } , [input])

  /////////////////////////////////////clean up function/////////

  // useEffect(()=>{
  //   console.log('avin' , count);

  //   return ()=> {
  //     console.log('sali' , count)
  //   }

  // })

  /////////////////////////////////////clean up function/////////

  // useEffect(()=>{
  //   console.log('avin', count);

  //   return ()=> {
  //     console.log('sali' , count)
  //   }

  // },[])

  /////////////////////////////////////clean up function/////////

  // useEffect(()=>{
  //   console.log('avin', count);
  //       return ()=> {
  //     console.log('sali' , count)
  //   }

  // } , [count])

  /////////////////////////////////////clean up function/////////

  useEffect(() => {
    console.log("avin", count, input);
    return () => {
      console.log("sali", count, input);
    };
  }, [input, count]);

  return (
    <>
      <h1>count : {count}</h1>
      <button onClick={clickHandler}>increase</button>
      <hr />
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <h1>input value: {input}</h1>
      <hr />
    </>
  );
}

export default App;
