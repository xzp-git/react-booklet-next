'use client';
import {useCallback, useEffect, useLayoutEffect, useRef} from 'react';

const useInterval = (callbackFn: () => void, delay = 1000) => {
  const callbackFnRef = useRef(callbackFn);
  const cleanFnRef = useRef<() => void>(null);
  useLayoutEffect(() => {
    callbackFnRef.current = callbackFn;
  });
  const clean = useCallback(() => {
    if (cleanFnRef.current) {
      cleanFnRef.current();
    }
  }, []);
  useEffect(() => {
    const timer = setInterval(() => callbackFnRef.current(), delay);
    cleanFnRef.current = () => {
      clearInterval(timer);
    };
    return clean;
  }, [clean, delay]);

  return clean;
};

export default useInterval;
