'use client';
import {useState} from 'react';

import useInterval from '@/hooks/useInterval';

const UseInterval = () => {
  const [count, setCount] = useState(0);
  const updateCount = () => setCount(count + 1);

  const clean = useInterval(updateCount, 1000);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={clean}>Stop</button>
    </>
  );
};

export default UseInterval;
