// import logo from './logo.svg';
import './App.css';

import { useState } from 'react';

const defaultNumber = 10;
function App() {
  // let counter = defaultNumber;

  const [counter, setCounter] = useState(defaultNumber);

  // const handleIncrease = () => {
  //   console.log('handleIncrease'+counter);
  //   setCounter(counter + 1);
  //   console.log(counter);
  //   console.log(setCounter);
  // };

  // const handleDecrease = () => {
  //   // setCounter(counter - 1);
  //   setCounter((num) => num-1 )
  // };

  // const handleClick = (type) =>{
  //   return () => {
  //     if (type === 'increase') {
  //       setCounter((num) => num+1)
  //     } else if (type === 'decrease') {
  //       setCounter((num) => num-1)
  //     }
  //   };
  // }

  const handleClick = (type) => (e) => {
      console.log(e.target);
      if (type === 'increase') {
        setCounter((num) => num+1)
      } else if (type === 'decrease') {
        setCounter((num) => num-1)
      }
  };


  return (
    // <div className="container">
    //   <div className="chevron chevron-up" onClick={handleIncrease}></div>
    //   <div className="number">{counter}</div>
    //   <div className="chevron chevron-down" onClick={handleDecrease}></div>
    // </div>
    <div className="container">
      <div 
        className="chevron chevron-up" 
        // onClick={()=>handleClick('increase')}
        onClick={handleClick('increase')}
      >
      </div>
       <div className="number">{counter}</div>
       <div 
        className="chevron chevron-down" 
        // onClick={()=>handleClick('decrease')}
        onClick={handleClick('decrease')}
      >
      </div>
    </div> 
  );
}

export default App;
