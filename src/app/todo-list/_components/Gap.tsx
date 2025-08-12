import {useEffect, useRef} from 'react';
import {useDrop} from 'react-dnd';
import classNames from 'classnames';

import './index.css';

function Gap() {
  const ref = useRef<HTMLDivElement>(null);

  const [{isOver}, drop] = useDrop(() => {
    return {
      accept: 'NEW_ITEM',
      drop(item) {},
      collect(monitor) {
        return {
          isOver: monitor.isOver()
        };
      }
    };
  });

  useEffect(() => {
    drop(ref);
  }, []);

  const cs = classNames('h-12 relative', isOver ? 'drop-indicator' : '');

  return <div ref={ref} className={cs}></div>;
}

export default Gap;
