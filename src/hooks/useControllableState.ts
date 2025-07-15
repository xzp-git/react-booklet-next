'use client';
import {
  type Dispatch,
  type SetStateAction,
  useCallback,
  useEffect,
  useRef,
  useState
} from 'react';

function isFunction(value: unknown): value is (...args: unknown[]) => unknown {
  return typeof value == 'function';
}

const useControllableState = <T>(
  defaultStateValue: T,
  props?: {
    defaultValue?: T;
    value?: T;
    onChange?: Dispatch<T>;
  }
): [T | undefined, Dispatch<SetStateAction<T>>] => {
  const {defaultValue, value, onChange} = props || {};
  const isFirstRender = useRef(true);

  const [innerState, setInnerState] = useState<T | undefined>(() => {
    if (value !== undefined) {
      return value;
    } else if (defaultValue !== undefined) {
      return defaultValue;
    } else {
      return defaultStateValue;
    }
  });

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (value === undefined) {
      setInnerState(value);
    }
  }, [value]);

  const mergedState = value !== undefined ? value : innerState;

  const setMergedState = useCallback(
    (val: SetStateAction<T>) => {
      const currentValue = (isFunction(val) ? val(mergedState) : val) as T;
      if (value === undefined) {
        setInnerState(currentValue);
      }
      onChange?.(currentValue);
    },
    [mergedState, onChange, value]
  );

  return [mergedState, setMergedState];
};

export default useControllableState;
