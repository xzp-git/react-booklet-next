import React, {useEffect, useRef} from 'react';
import {useDrop} from 'react-dnd';
import classNames from 'classnames';

const GarbageBin = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [{isOver}, drop] = useDrop({
    accept: 'LIST_ITEM',
    drop(item) {
      console.log(item, 'drop');
    },
    collect(monitor) {
      return {
        isOver: monitor.isOver()
      };
    }
  });
  useEffect(() => {
    drop(ref);
  }, []);
  return (
    <div
      ref={ref}
      className={classNames(
        'w-full h-500 bg-orange-500 flex justify-center items-center text-2xl',
        isOver ? 'bg-yellow-400 border-dashed' : ''
      )}
    >
      GarbageBin
    </div>
  );
};

export default GarbageBin;
