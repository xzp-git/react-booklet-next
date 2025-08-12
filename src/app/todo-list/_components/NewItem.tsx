import {useEffect, useRef} from 'react';
import {useDrag} from 'react-dnd';
import classNames from 'classnames';

const NewItem = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [{dragging}, drag] = useDrag({
    type: 'NEW_ITEM',
    item: {},
    collect(monitor) {
      return {
        dragging: monitor.isDragging()
      };
    }
  });

  useEffect(() => {
    drag(ref);
  }, []);

  return (
    <div
      ref={ref}
      className={classNames(
        'cursor-move select-none',
        `w-full h-40 p-24 mb-12 border-2 bg-blue-400 flex items-center
        border-amber-200`,
        dragging ? 'border-dashed bg-green-200' : ''
      )}
    >
      新的代办事项
    </div>
  );
};

export default NewItem;
