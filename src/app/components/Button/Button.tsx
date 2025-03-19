'use client';

import {  useEffect, useMemo, useState } from "react";

export const Button = () => {
  const [count, setCount] = useState(0);
  const [reset, setReset] = useState(false);
  const [message, setMessage] = useState('');

  const increment = useMemo(() => {
    return count / 10;
  }, [count]);

  // const handleClickIncrement = useCallback(() => {
  //   setCount(count + 1);

  //   if(count > 10){
  //     setCount(0);
  //   }
  // }, [count]);
  
  const handleClick = () => {
    setCount(count + 1);

    if(count === 10) {
      setReset(true);
    }

    if(reset){
      setReset(false);
    }
  };

  const handleClickReset = () => {
    if (reset) {
      setCount(0);
      setReset(false);
    } else {
      setCount(count - 1);
    }
  }

  useEffect(() => {
    if(count > 10){
      setCount(4);
      setMessage('O contador foi zerado');
    }
  }, [count])

  return (
    <div className="flex flex-col items-center justify-center gap-2">
       <span className="text-2xl font-bold text-white">{count}</span>
       <div className="flex gap-2">
       <button className="bg-blue-500/70 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleClick()}>Clique aqui</button>
       <button className="bg-gray-500/70 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleClickReset()}>{reset ? 'Resetar' : 'Subtrair'}</button>
       {/* {reset && <div className="text-white w-10 h-10 bg-slate-500  rounded-full">Popover</div>} */}
       {message && <span className="text-2xl font-bold text-white">{message}</span>}
       </div>
    </div>
   
  );
};