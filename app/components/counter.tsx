// "use client";
// import { useState } from "react";

// const counterApp = () =>{
//     const [counter,setCounter] = useState(0)
//     const handleCount = (anotation:any) =>{
//                 if(anotation == "increament"){
//             setCounter(counter+1);
//     } if (anotation == "decreament") {
//        if (counter< 0) {
//         return
//        } else{
//         setCounter(counter -1)
//        }

//     }
//     }
//     return(
// <>
// <h1>Counter App</h1>
// <h1>{counter}</h1>
// <button onClick={()=>handleCount("increament")}>Increment</button>
// <button onClick={()=>handleCount("decreament")}>Decrement</button>
// </>
//     )
// }
// export default counterApp;
"use client";
import { useState } from "react";

const CounterApp = () => {
  const [counter, setCounter] = useState(0);

  const handleCount = (annotation: string) => {
    if (annotation === "increment") {
      setCounter(counter + 1);
    } 
    if (annotation === "decrement") {
      if (counter > 0) {
        setCounter(counter - 1);
      }
    }
  };

  return (
    <>
      <h1>Counter App</h1>
      <h1>{counter}</h1>
      <button onClick={() => handleCount("increment")}>Increment</button>
      <button onClick={() => handleCount("decrement")}>Decrement</button>
    </>
  );
};

export default CounterApp;
